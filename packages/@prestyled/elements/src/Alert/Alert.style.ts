import { type VariantProps, cva } from 'class-variance-authority';

export const alertStyle = cva('flex flex-col gap-2 p-4 text-sm', {
  variants: {
    state: {
      default: ['text-base-700', 'bg-base-100', 'border-base-500', 'dark:bg-base-700', 'dark:text-base-300'],
      info: ['text-info-700', 'bg-info-100', 'border-info-500', 'dark:bg-info-200', 'dark:text-info-800'],
      success: [
        'text-success-700',
        'bg-success-100',
        'border-success-500',
        'dark:bg-success-200',
        'dark:text-success-800',
      ],
      warning: [
        'text-warning-700',
        'bg-warning-100',
        'border-warning-500',
        'dark:bg-warning-200',
        'dark:text-warning-800',
      ],
      error: ['text-danger-700', 'bg-danger-100', 'border-danger-500', 'dark:bg-danger-200', 'dark:text-danger-800'],
    },
  },
  compoundVariants: [],
  defaultVariants: {
    state: 'default',
  },
});
export type AlertStyleProps = VariantProps<typeof alertStyle>;
