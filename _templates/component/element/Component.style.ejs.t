---
to: "<%= h.src() %>/packages-ui/prestyled-elements/src/<%= Name %>/<%= Name %>.style.ts"
---
import { type VariantProps, cva } from 'class-variance-authority';

export const <%= name %>Style = cva('w-full', {
  variants: {
    hspace: {
      full: ['p-0'],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    hspace: 'full',
  },
});
export type <%= Name %>StyleProps = VariantProps<typeof <%= name %>Style>;
