import { computePosition } from '@floating-ui/dom';
import { RefObject, useRef } from 'react';
import { Editor, Range } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';
import { Button } from 'ui';
import { v4 as uuidv4 } from 'uuid';

import { EditorPlugin } from '../utils/compose-plugins';
import { getActiveStyles } from '../utils/editor-utils';

export const commentLeafPlugin: EditorPlugin = (editableProps, editor, refs) => {
  const { popoverRef } = refs;
  return {
    toolbarTools: [<CommentButton />],
    editableProps: {
      ...editableProps,
      renderLeaf: (props) => {
        const { leaf, children, attributes } = props;
        let el = <>{children}</>;
        if (leaf.commentIds?.length) {
          el = (
            <span data-comment-ids={leaf.commentIds?.join(',')} className="bg-warning-200">
              {el}
            </span>
          );
        }
        return editableProps.renderLeaf?.({ ...props, children: el }) || el;
      },
    },
    onChange: (value, editor) => {
      const selection = editor.selection;
      if (selection && Range.isCollapsed(selection) && getActiveStyles(editor).has('commentIds')) {
        const activeCommentEl = ReactEditor.toDOMRange(editor, selection).startContainer;
        popoverRef.current?.classList.remove('hidden');
        if (popoverRef.current) {
          popoverRef.current.dataset.commentIds = Editor.marks(editor)?.commentIds?.join(',');
        }

        computePosition(activeCommentEl.parentElement!, popoverRef.current!).then(({ x, y }) => {
          const popover = popoverRef.current!;
          Object.assign(popover.style, {
            left: `${x}px`,
            top: `${y}px`,
          });
        });
      } else {
        popoverRef.current?.classList.add('hidden');
        if (popoverRef.current) {
          popoverRef.current.dataset.commentIds = '';
        }
      }
    },
  };
};

const CommentButton = () => {
  const editor = useSlate();

  return (
    <>
      <Button
        onMouseDown={async (event) => {
          event.preventDefault();

          let existingCommentIds: string[] = [];
          if (Editor.marks(editor)?.commentIds) {
            existingCommentIds = Editor.marks(editor)?.commentIds as string[];
          }
          const commentId = uuidv4();
          Editor.addMark(editor, 'commentIds', [...existingCommentIds, commentId]);
        }}
        className={`m-1`}
        intent={'outline'}
      >
        Add Comment
      </Button>
    </>
  );
};
