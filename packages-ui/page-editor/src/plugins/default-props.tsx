import { EditorPlugin } from '../utils/compose-plugins';

export const defaultPropsPlugin: EditorPlugin = (editableProps) => ({
  editableProps: {
    ...editableProps,
    placeholder: 'Write something...',
  },
});
