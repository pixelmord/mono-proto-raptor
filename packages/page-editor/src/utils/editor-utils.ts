import { Editor } from 'slate';

export function getActiveStyles(editor: Editor) {
  return new Set(Object.keys(Editor.marks(editor) ?? {}));
}
export function toggleMark(editor: Editor, style: string) {
  const activeStyles = getActiveStyles(editor);
  if (activeStyles.has(style)) {
    Editor.removeMark(editor, style);
  } else {
    Editor.addMark(editor, style, true);
  }
}
