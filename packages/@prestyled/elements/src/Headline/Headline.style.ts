import { type VariantProps, cva } from 'class-variance-authority';
export const headlineStyle = cva('text-base-800 dark:text-base-100 leading-tight', {
  variants: {
    styling: {
      h1: ['text-4xl', 'font-headline', 'font-medium'],
      h2: ['text-3xl', 'font-headline', 'font-medium'],
      h3: ['text-2xl', 'font-headline', 'font-medium'],
      h4: ['text-xl', 'font-sans', 'font-bold'],
      h5: ['text-l', 'font-sans', 'font-bold'],
      h6: ['text-base', 'font-sans', 'font-bold'],
    },
    vspace: {
      none: ['my-0'],
      tight: ['mt-2', 'mb-1'],
      normal: ['mt-4', 'mb-2'],
      loose: ['mt-8', 'mb-4'],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    styling: 'h2',
    vspace: 'normal',
  },
});

export type HeadlineStyleProps = VariantProps<typeof headlineStyle>;
