import { useMemo } from 'react';
import { Descendant, createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';

interface PageEditorProps {
  document?: Descendant[];
  onChange: ((value: Descendant[]) => void) | undefined;
  className?: string;
}
export const PageEditor = ({
  document = [
    {
      children: [
        {
          text: 'hallo',
        },
      ],
    },
  ],
  onChange,
  className,
}: PageEditorProps) => {
  const editor = useMemo<ReactEditor>(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate editor={editor} onChange={onChange} value={document}>
      <Editable className={className} />
    </Slate>
  );
};
export default PageEditor;
