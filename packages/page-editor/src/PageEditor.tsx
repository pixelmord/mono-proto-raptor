import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Editor, Descendant as EditorDescendant, Transforms, createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';

import { EditorPlugin, composeEditableProps } from './utils/compose-plugins';

export type Descendant = EditorDescendant;
interface PageEditorProps {
  document?: Descendant[];
  onChange?: (value: Descendant[], editor: Editor) => void;
  onCommentChange?: (value: Descendant[], commentId: string) => void;
  comments?: Record<string, Descendant[]>;
  className?: string;
  plugins?: EditorPlugin[];
}
export const PageEditor = ({
  document = [],
  onChange,
  onCommentChange,
  comments,
  className,
  plugins = [],
}: PageEditorProps) => {
  const editor = useMemo<Editor>(() => withHistory(withReact(createEditor())), []);
  const commentEditor = useMemo<Editor>(() => withHistory(withReact(createEditor())), []);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [commentIds, setCommentIds] = useState<string | null>(null);
  const commentDocument: Descendant[] = [{ type: 'paragraph', children: [{ text: '' }] }];
  useEffect(() => {
    // Delete all entries leaving 1 empty node
    Transforms.delete(commentEditor, {
      at: {
        anchor: Editor.start(commentEditor, []),
        focus: Editor.end(commentEditor, []),
      },
    });

    // Removes empty node
    Transforms.removeNodes(commentEditor, {
      at: [0],
    });

    if (commentIds && comments && comments[commentIds]) {
      // Insert array of children nodes
      Transforms.insertNodes(commentEditor, comments?.[commentIds]);
    } else {
      const newDocument: Descendant[] = [{ type: 'paragraph', children: [{ text: '' }] }];
      // Insert array of children nodes
      Transforms.insertNodes(commentEditor, newDocument);
    }
  }, [commentIds]);
  const { editableProps, toolbarTools } = composeEditableProps(plugins, editor, { popoverRef });
  const changeHandler = (value: Descendant[]) => {
    const isAstChange = editor.operations.some((op) => 'set_selection' !== op.type);
    if (!isAstChange) {
      const commentIds = Editor.marks(editor)?.commentIds?.join(',') || null;
      setCommentIds(commentIds);
    }
    for (const plugin of plugins) {
      const { onChange: pluginOnChange } = plugin(editableProps, editor, { popoverRef });
      pluginOnChange?.(value, editor);
    }

    // call the changeHandler passed by the consumer
    if (isAstChange) {
      onChange?.(value, editor);
    }
  };
  const commentChangeHandler = useCallback(
    (value: Descendant[]) => {
      const commentId = popoverRef.current?.dataset.commentIds;
      const isAstChange = commentEditor.operations.some((op) => 'set_selection' !== op.type);
      // call the changeHandler passed by the consumer
      if (commentId && isAstChange) {
        onCommentChange?.(value, commentId);
      }
    },
    [popoverRef.current?.dataset.commentIds]
  );
  return (
    <div className="relative">
      <Slate editor={editor} onChange={changeHandler} value={document}>
        <div className="relative">
          {toolbarTools.map((tool, index) => (
            <Fragment key={index}>{tool}</Fragment>
          ))}
        </div>
        <Editable className={className} {...editableProps} />
      </Slate>
      <div ref={popoverRef} className="absolute hidden border rounded shadow bg-white p-3">
        <Slate editor={commentEditor} onChange={commentChangeHandler} value={commentDocument}>
          <Editable className="min-w-[300px] prose" />
        </Slate>
      </div>
    </div>
  );
};
export default PageEditor;
