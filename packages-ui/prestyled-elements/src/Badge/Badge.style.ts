import { type VariantProps, cva } from 'class-variance-authority';

export const badgeStyle = cva('inline-flex h-fit items-center gap-1 font-semibold', {
  variants: {
    intent: {
      default: [
        'bg-accent-100',
        'text-accent-800',
        'dark:bg-accent-200',
        'dark:text-accent-800',
        'group-hover:bg-accent-200',
        'dark:group-hover:bg-accent-300',
      ],
      info: [
        'bg-info-100',
        'text-info-800',
        'dark:bg-info-200',
        'dark:text-info-800',
        'group-hover:bg-info-200',
        'dark:group-hover:bg-info-300',
      ],
      success: [
        'bg-success-100',
        'text-success-800',
        'dark:bg-success-200',
        'dark:text-success-800',
        'group-hover:bg-success-200',
        'dark:group-hover:bg-success-300',
      ],
      warning: [
        'bg-warning-100',
        'text-warning-800',
        'dark:bg-warning-200',
        'dark:text-warning-800',
        'group-hover:bg-warning-200',
        'dark:group-hover:bg-warning-300',
      ],
      error: [
        'bg-danger-100',
        'text-danger-800',
        'dark:bg-danger-200',
        'dark:text-danger-800',
        'group-hover:bg-danger-200',
        'dark:group-hover:bg-danger-300',
      ],
    },
    rounded: {
      full: ['rounded-full p-1.5'],
      round: ['rounded px-2 py-0.5'],
      none: [],
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    intent: 'default',
    size: 'sm',
    rounded: 'round',
  },
});
export type BadgeStyleProps = VariantProps<typeof badgeStyle>;

export const badgeIconStyle = cva('', {
  variants: {
    size: {
      xs: 'w-3 h-3',
      sm: 'w-3.5 h-3.5',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: 'sm',
  },
});
export type BadgeIconStyleProps = VariantProps<typeof badgeIconStyle>;
