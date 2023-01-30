import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { Editor, Descendant as EditorDescendant, createEditor } from 'slate';
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
  const [commentDocument, setCommentDocument] = useState<Descendant[]>([
    { type: 'paragraph', children: [{ text: '' }] },
  ]);
  useEffect(() => {
    if (popoverRef.current && popoverRef.current.dataset.commentIds) {
      const commentId = popoverRef.current.dataset.commentIds;
      const comment = comments?.[commentId];
      if (comment) {
        setCommentDocument(comment);
      } else {
        const newDocument: Descendant[] = [{ type: 'paragraph', children: [{ text: '' }] }];
        setCommentDocument(newDocument);
      }
    }
  }, [popoverRef.current, popoverRef.current?.dataset.commentIds]);
  const { editableProps, toolbarTools } = composeEditableProps(plugins, editor, { popoverRef });
  const changeHandler = (value: Descendant[]) => {
    for (const plugin of plugins) {
      const { onChange } = plugin(editableProps, editor, { popoverRef });
      onChange?.(value, editor);
    }

    // call the changeHandler passed by the consumer
    onChange?.(value, editor);
  };
  const commentChangeHandler = (value: Descendant[]) => {
    const commentId = popoverRef.current?.dataset.commentIds;
    // call the changeHandler passed by the consumer
    if (commentId) {
      onCommentChange?.(value, commentId);
    }
  };
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
