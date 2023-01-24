import { Fragment, useMemo } from 'react';
import { Editor, Descendant as EditorDescendant, createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';

import { EditorPlugin, composeEditableProps } from './utils/compose-plugins';

export type Descendant = EditorDescendant;
interface PageEditorProps {
  document?: Descendant[];
  onChange: ((value: Descendant[]) => void) | undefined;
  className?: string;
  plugins?: EditorPlugin[];
}
export const PageEditor = ({ document = [], onChange, className, plugins = [] }: PageEditorProps) => {
  const editor = useMemo<Editor>(() => withHistory(withReact(createEditor())), []);
  const { editableProps, toolbarTools } = composeEditableProps(plugins, editor);

  return (
    <Slate editor={editor} onChange={onChange} value={document}>
      <div>
        {toolbarTools.map((tool, index) => (
          <Fragment key={index}>{tool}</Fragment>
        ))}
      </div>
      <Editable className={className} {...editableProps} />
    </Slate>
  );
};
export default PageEditor;
