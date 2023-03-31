import { cva, VariantProps } from 'class-variance-authority';

export const fieldStyle = cva(
  'block w-full rounded-md  shadow-sm  sm:text-sm bg-white text-base-800 dark:bg-base-900 dark:text-base-200',
  {
    variants: {
      state: {
        default: ['border-base-300', 'focus:border-accent-500', 'focus:ring-accent-500', 'dark:border-base-500'],
        warning: [
          'border-warning-300',
          'focus:border-warning-500',
          'focus:ring-warning-500',
          'dark:focus:border-warning-400',
          'dark:focus:ring-warning-400',
        ],
        info: [
          'border-info-300',
          'focus:border-info-500',
          'focus:ring-info-500',
          'dark:focus:border-info-400',
          'dark:focus:ring-info-400',
        ],
        success: [
          'border-success-300',
          'focus:border-success-500',
          'focus:ring-success-500',
          'dark:focus:border-success-400',
          'dark:focus:ring-success-400',
        ],
        error: [
          'border-danger-300',
          'focus:border-danger-500',
          'focus:ring-danger-500',
          'dark:focus:border-danger-400',
          'dark:focus:ring-danger-400',
        ],
      },
    },
    compoundVariants: [],
    defaultVariants: {
      state: 'default',
    },
  }
);
export type FieldStyleProps = VariantProps<typeof fieldStyle>;
