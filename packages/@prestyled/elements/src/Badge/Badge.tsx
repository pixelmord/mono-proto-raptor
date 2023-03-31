import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { BadgeStyleProps, badgeIconStyle, badgeStyle } from './Badge.style';

export type BadgeProps = PropsWithChildren<Omit<ComponentProps<'span'>, 'color'>> &
  BadgeStyleProps & {
    href?: string;
    icon?: FC<ComponentProps<'svg'>>;
  };

export const Badge: FC<BadgeProps> = ({
  children,
  intent = 'default',
  icon: Icon,
  size = 'xs',
  className,
  ...props
}) => {
  return (
    <span className={twMerge(badgeStyle({ intent, size, className }))} data-testid="testmy-badge" {...props}>
      {Icon && <Icon aria-hidden className={twMerge(badgeIconStyle({ size }))} data-testid="testmy-badge-icon" />}
      {children && <span>{children}</span>}
    </span>
  );
};
