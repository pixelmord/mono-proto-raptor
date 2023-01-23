import { useMemo } from 'react';
import { Descendant, Editor, createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';

import { EditorPlugin, composeEditableProps } from './utils/compose-plugins';

interface PageEditorProps {
  document?: Descendant[];
  onChange: ((value: Descendant[]) => void) | undefined;
  className?: string;
  plugins?: EditorPlugin[];
}
export const PageEditor = ({
  document = [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ],
  onChange,
  className,
  plugins = [],
}: PageEditorProps) => {
  const editor = useMemo<Editor>(() => withHistory(withReact(createEditor())), []);
  const { editableProps, toolbarTools } = composeEditableProps(plugins, editor);

  return (
    <Slate editor={editor} onChange={onChange} value={document}>
      <div>
        {toolbarTools.map((tool) => (
          <>{tool}</>
        ))}
      </div>
      <Editable className={className} {...editableProps} />
    </Slate>
  );
};
export default PageEditor;
