import { type VariantProps, cva } from 'class-variance-authority';
export const avatarStyleVariants = {
  intent: {
    default: ['ring-base-300', 'dark:ring-base-500'],
    primary: ['ring-primary-300', 'dark:ring-primary-500'],
    info: ['ring-info-300', 'dark:ring-info-500'],
    warning: ['ring-warning-300', 'dark:ring-warning-500'],
    error: ['ring-danger-300', 'dark:ring-danger-500'],
    success: ['ring-success-300', 'dark:ring-success-500'],
  },
  bordered: {
    true: ['p-1 ring-2'],
    false: [],
  },
  contentDisplay: {
    img: [],
    initials: ['relative overflow-hidden bg-base-100 dark:bg-base-600'],
    fallback: [''],
  },
  rounded: {
    full: ['rounded-full'],
    round: ['rounded'],
    none: [],
  },
  stacked: {
    true: ['ring-2 ring-base-300 dark:ring-base-500'],
    false: [],
  },
  size: {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-20 h-20',
    xl: 'w-36 h-36',
  },
};
export const avatarStyle = cva('', {
  variants: {
    ...avatarStyleVariants,
  },
  compoundVariants: [],
  defaultVariants: {
    intent: 'default',
    bordered: false,
    contentDisplay: 'fallback',
    rounded: 'full',
    stacked: false,
  },
});
export type AvatarStyleProps = VariantProps<typeof avatarStyle>;

export const avatarStatusDotStyle = cva(
  'absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-base-800',
  {
    variants: {
      status: {
        default: ['bg-info-400'],
        away: ['bg-warning-400'],
        busy: ['bg-danger-400'],
        offline: ['bg-base-400'],
        online: ['bg-success-400'],
      },
      position: {
        'bottom-left': '-bottom-1 -left-1',
        'bottom-center': '-botton-1 center',
        'bottom-right': '-bottom-1 -right-1',
        'top-left': '-top-1 -left-1',
        'top-center': '-top-1 center',
        'top-right': '-top-1 -right-1',
        'center-right': 'center -right-1',
        center: 'center center',
        'center-left': 'center -left-1',
      },
    },
    compoundVariants: [],
    defaultVariants: {
      status: 'default',
    },
  }
);
export type AvatarStatusDotStyleProps = VariantProps<typeof avatarStatusDotStyle>;
