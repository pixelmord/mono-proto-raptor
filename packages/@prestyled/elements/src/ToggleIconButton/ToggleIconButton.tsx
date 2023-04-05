import { ComponentProps, FC, InputHTMLAttributes, forwardRef } from 'react';

export type ToggleIconButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  inactiveIcon: FC<ComponentProps<'svg'>>;
  activeIcon?: FC<ComponentProps<'svg'>>;
};

export const ToggleIconButton = forwardRef<HTMLInputElement, ToggleIconButtonProps>(
  ({ activeIcon: ActiveIcon, inactiveIcon: InactiveIcon, ...props }, ref) => {
    return (
      <label
        className="has-checkbox-checked:bg-accent-200 has-checkbox-checked:border-accent-300 has-checkbox-unchecked:bg-base-100 has-checkbox-unchecked:border-base-200 has-checkbox-focused:ring-2 has-checkbox-focused:ring-accent-500 has-checkbox-focused:ring-offset-2 has-checkbox-focused:ring-offset-base-100 dark:has-checkbox-focused:ring-offset-base-800 flex h-8 w-8 cursor-pointer items-center justify-center rounded transition-colors"
        data-toggle-button
      >
        <input
          ref={ref}
          type="checkbox"
          data-testid="testmy-toggle-button-checkbox"
          data-toggle-checkbox="button"
          className="peer absolute h-0 w-0 opacity-0"
          {...props}
        />

        {ActiveIcon ? (
          <ActiveIcon
            className="ease-[cubic-bezier(0.175, 0.885, 0.320, 1.275)] peer-checked:text-accent-700 hidden opacity-0 transition-all peer-checked:block peer-checked:opacity-100"
            data-toggle-button-knob-active
          />
        ) : (
          <InactiveIcon
            className="ease-[cubic-bezier(0.175, 0.885, 0.320, 1.275)] peer-checked:text-accent-700 hidden opacity-0 transition-all peer-checked:block peer-checked:opacity-100"
            data-toggle-button-knob-active
          />
        )}

        <InactiveIcon
          className="ease-[cubic-bezier(0.175, 0.885, 0.320, 1.275)] peer-checked:text-accent-700 block opacity-100 transition-all peer-checked:hidden peer-checked:opacity-0"
          data-toggle-button-knob-inactive
        />
      </label>
    );
  }
);

ToggleIconButton.displayName = 'ToggleIconButton';
