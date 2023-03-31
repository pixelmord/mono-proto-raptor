import { twMerge } from 'tailwind-merge';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

export type AvatarGroupCounterProps = PropsWithChildren<ComponentProps<'a'>> & {
  total?: number;
};

export const AvatarGroupCounter: FC<AvatarGroupCounterProps> = ({ className, href, total, ...props }) => {
  const classString = twMerge(
    'relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-base-700 rounded-full ring-2 ring-base-300 hover:bg-base-600 dark:ring-base-500',
    className
  );

  return (
    <a href={href} className={classString} {...props}>
      +{total}
    </a>
  );
};

AvatarGroupCounter.displayName = 'Avatar.GroupCounter';
