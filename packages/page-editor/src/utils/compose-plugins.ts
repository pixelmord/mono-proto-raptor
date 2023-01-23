import { ReactNode } from 'react';
import { Editor } from 'slate';
import { EditableProps } from 'slate-react/dist/components/editable';

export type EditorPlugin = (
  editableProps: EditableProps,
  editor: Editor
) => { editableProps: EditableProps; toolbarTools?: ReactNode[] };

export const composeEditableProps = (
  plugins: EditorPlugin[],
  editor: Editor
): { editableProps: EditableProps; toolbarTools: ReactNode[] } => {
  let editableProps: EditableProps = {};
  let toolbarTools: ReactNode[] = [];
  for (const plugin of plugins) {
    const { editableProps: props, toolbarTools: tools } = plugin(editableProps, editor);
    editableProps = props;
    toolbarTools = [...toolbarTools, ...(tools && tools.length ? tools : [])];
  }
  return { editableProps, toolbarTools };
};
