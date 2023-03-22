import { isHotkey } from 'is-hotkey';
import { ReactNode, RefObject } from 'react';
import { Descendant, Editor } from 'slate';
import { EditableProps } from 'slate-react/dist/components/editable';

import { toggleMark } from './editor-utils';

export type EditorPlugin = (
  editableProps: EditableProps,
  editor: Editor,
  refs: { popoverRef: RefObject<HTMLDivElement> }
) => {
  editableProps: EditableProps;
  toolbarTools?: ReactNode[];
  hotKeyMap?: Record<string, string>;
  onChange?: (value: Descendant[], editor: Editor) => void;
};

export const composeEditableProps = (
  plugins: EditorPlugin[],
  editor: Editor,
  refs: { popoverRef: RefObject<HTMLDivElement> }
): { editableProps: EditableProps; toolbarTools: ReactNode[] } => {
  let editableProps: EditableProps = {};
  let toolbarTools: ReactNode[] = [];
  let hotKeyMap: Record<string, string> = {};
  for (const plugin of plugins) {
    const { editableProps: props, toolbarTools: tools, hotKeyMap: hotkeys } = plugin(editableProps, editor, refs);
    hotKeyMap = { ...hotKeyMap, ...hotkeys };
    editableProps = {
      ...props,
      onKeyDown: (event) => {
        for (const hotkey in hotKeyMap) {
          if (isHotkey(hotkey, event as any)) {
            event.preventDefault();
            const mark = hotKeyMap[hotkey];
            toggleMark(editor, mark);
          }
        }
      },
    };
    toolbarTools = [...toolbarTools, ...(tools && tools.length ? tools : [])];
  }
  return { editableProps, toolbarTools };
};
