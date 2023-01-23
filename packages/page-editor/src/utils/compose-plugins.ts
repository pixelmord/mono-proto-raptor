import { ReactNode } from 'react';
import { Editor } from 'slate';
import { EditableProps } from 'slate-react/dist/components/editable';

export type EditorPlugin = (
  editableProps: EditableProps,
  editor: Editor
) => { editableProps: EditableProps; toolbarTool?: ReactNode };

export const composeEditableProps = (
  plugins: EditorPlugin[],
  editor: Editor
): { editableProps: EditableProps; toolbarTools: ReactNode[] } => {
  let editableProps: EditableProps = {};
  const toolbarTools: ReactNode[] = [];
  for (const plugin of plugins) {
    const { editableProps: props, toolbarTool } = plugin(editableProps, editor);
    editableProps = props;
    if (toolbarTool) {
      toolbarTools.push(toolbarTool);
    }
  }
  return { editableProps, toolbarTools };
};
