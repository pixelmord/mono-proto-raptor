import { BaseEditor } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;
export type TextAlignment = 'left' | 'center' | 'right';
export type ParagraphElement = {
  type: 'paragraph';
  align: TextAlignment;
  children: CustomText[];
};
export type BlockQuoteElement = {
  type: 'block-quote';
  align: TextAlignment;
  children: CustomText[];
};
export type BulletedListElement = {
  type: 'bulleted-list';
  align: TextAlignment;
  children: CustomText[];
};
export type NumberedListElement = {
  type: 'numbered-list';
  align: TextAlignment;
  children: CustomText[];
};
export type ListItemElement = {
  type: 'list-item';
  align: TextAlignment;
  children: CustomText[];
};

export type HeadingElement = {
  type: 'heading';
  align: TextAlignment;
  level: number;
  children: CustomText[];
};

export type CustomElement =
  | ParagraphElement
  | HeadingElement
  | BlockQuoteElement
  | BulletedListElement
  | NumberedListElement
  | ListItemElement;

export type FormattedText = { text: string; bold?: true; code?: true; italic?: true; underline?: true };

export type CustomText = FormattedText;

declare module 'slate' {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
