import { useSlate } from 'slate-react';
import { Button } from 'prestyled-elements';

import { EditorPlugin } from '../utils/compose-plugins';
import { getActiveStyles, toggleMark } from '../utils/editor-utils';

const LEAF_STYLES = ['bold', 'italic', 'underline', 'code'];
export const typographyLeafsPlugin: EditorPlugin = (editableProps) => {
  return {
    toolbarTools: LEAF_STYLES.map((style) => <LeafButton leaf_style={style} />),
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
        el = <span {...attributes}>{el}</span>;

        return editableProps.renderLeaf?.({ ...props, children: el }) || el;
      },
    },
    hotKeyMap: {
      'mod+b': 'bold',
      'mod+i': 'italic',
      'mod+u': 'underline',
      'mod+`': 'code',
    },
  };
};

const LeafButton = ({ leaf_style }: { leaf_style: string }) => {
  const editor = useSlate();
  return (
    <Button
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, leaf_style);
      }}
      className={`m-1`}
      intent={getActiveStyles(editor).has(leaf_style) ? 'primary' : 'outline'}
    >
      {leaf_style}
    </Button>
  );
};
