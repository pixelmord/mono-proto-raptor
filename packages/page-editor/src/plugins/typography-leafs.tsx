import { DefaultElement } from 'slate-react';

import { EditorPlugin } from '../utils/compose-plugins';

export const typographyLeafsPlugin: EditorPlugin = (editableProps) => {
  return {
    editableProps: {
      ...editableProps,
      renderLeaf: (props) => {
        const { leaf, children, attributes } = props;
        let el = <>{children}</>;
        if (leaf.bold) {
          el = <strong>{el}</strong>;
        }
        if (leaf.code) {
          el = <code>{el}</code>;
        }

        if (leaf.italic) {
          el = <em>{el}</em>;
        }

        if (leaf.underline) {
          el = <u>{el}</u>;
        }

        return <span {...attributes}>{el}</span>;
      },
    },
  };
};
