import { type VariantProps, cva } from 'class-variance-authority';

export const containerStyle = cva('w-full', {
  variants: {
    hspace: {
      full: ['p-0'],
      article: ['mx-auto', 'max-w-7xl', 'px-4', 'sm:px-6', 'lg:px-8'],
      page: ['mx-auto', 'max-w-7xl', 'px-4', 'sm:px-6', 'lg:px-8'],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    hspace: 'full',
  },
});
export type ContainerStyleProps = VariantProps<typeof containerStyle>;
