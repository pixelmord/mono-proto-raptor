import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { Positions } from '../types';
import { avatarStatusDotStyle, AvatarStatusDotStyleProps, avatarStyle, AvatarStyleProps } from './Avatar.style';
import { AvatarGroup } from './AvatarGroup';
function getInitialsFromName(alt: string) {
  const parts = alt.split(' ');
  if (parts.length === 1) {
    return parts[0].charAt(0);
  }
  return parts[0].charAt(0) + parts[parts.length - 1].charAt(0);
}
import { AvatarGroupCounter } from './AvatarGroupCounter';

export type AvatarImageProps = {
  alt: string;
  className?: string;
  'data-testid': string;
};

export type AvatarProps = PropsWithChildren<ComponentProps<'div'>> &
  AvatarStyleProps & {
    alt: string;
    img?: string | ((props: AvatarImageProps) => ReactElement);
    statusDotState?: 'away' | 'busy' | 'offline' | 'online';
    statusDotPosition?: keyof Positions;
    placeholderInitials?: boolean;
    classNamesFn?: (args: AvatarStyleProps) => string;
    statusDotClassNamesFn?: (args: AvatarStatusDotStyleProps) => string;
  };

const AvatarComponent: FC<AvatarProps> = ({
  alt,
  bordered = false,
  children,
  className,
  intent = 'default',
  img,
  placeholderInitials = false,
  rounded = 'round',
  size = 'md',
  stacked = false,
  statusDotState,
  statusDotPosition = 'top-left',
  classNamesFn = avatarStyle,
  statusDotClassNamesFn = avatarStatusDotStyle,
  ...props
}) => {
  className = twMerge('flex items-center justify-center space-x-4', className);

  const imgProps = {
    alt,
    className: twMerge(classNamesFn({ intent, contentDisplay: 'img', rounded, bordered, stacked, size })),
    'data-testid': 'testmy-avatar-img',
  };

  return (
    <div className={className} data-testid="testmy-avatar" {...props}>
      <div className="relative">
        {img ? (
          typeof img === 'string' ? (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img {...imgProps} src={img} />
          ) : (
            img(imgProps)
          )
        ) : placeholderInitials ? (
          <div
            className={twMerge(classNamesFn({ intent, contentDisplay: 'initials', rounded, bordered, stacked, size }))}
            data-testid="testmy-avatar-initials-placeholder"
          >
            <span
              className="text-base-600 dark:text-base-300 font-medium"
              data-testid="testmy-avatar-initials-placeholder-text"
            >
              {getInitialsFromName(alt)}
            </span>
          </div>
        ) : (
          <div
            className={twMerge(classNamesFn({ intent, contentDisplay: 'fallback', rounded, bordered, stacked, size }))}
            data-testid="testmy-avatar-img"
          >
            <svg
              className={'text-base-400 absolute -bottom-1 h-auto w-auto'}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        {statusDotState && (
          <span
            data-testid="testmy-avatar-status"
            className={twMerge(statusDotClassNamesFn({ status: statusDotState, position: statusDotPosition }))}
          />
        )}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

AvatarComponent.displayName = 'Avatar';
export const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter,
});
