import type { ComponentProps, PropsWithChildren } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export type AvatarGroupProps = PropsWithChildren<ComponentProps<'div'>>;

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, className, ...props }) => {
  const classString = twMerge('flex -space-x-4', className);
  return (
    <div data-testid="avatar-group-element" className={classString} {...props}>
      {children}
    </div>
  );
};

AvatarGroup.displayName = 'Avatar.Group';
