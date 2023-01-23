import { Button } from 'ui';

import { EditorPlugin } from '../utils/compose-plugins';
import { getActiveStyles, toggleStyle } from '../utils/editor-utils';

const LEAF_STYLES = ['bold', 'italic', 'underline', 'code'];
export const typographyLeafsPlugin: EditorPlugin = (editableProps, editor) => {
  return {
    toolbarTools: LEAF_STYLES.map((style) => (
      <Button
        onMouseDown={(event) => {
          event.preventDefault();
          toggleStyle(editor, style);
        }}
        className={`m-1`}
        intent={getActiveStyles(editor).has(style) ? 'primary' : 'outline'}
      >
        {style}
      </Button>
    )),
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
