import { InputHTMLAttributes, forwardRef } from 'react';

export type ToggleSwitchProps = InputHTMLAttributes<HTMLInputElement>;

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(({ children, ...props }, ref) => {
  return (
    <label className="flex items-center" data-toggle-switch-label>
      <div
        className="pointer has-checkbox-checked:bg-accent-200 has-checkbox-checked:border-accent-300 has-checkbox-unchecked:bg-base-100 has-checkbox-unchecked:border-base-200 has-checkbox-focused:ring-2 has-checkbox-focused:ring-accent-500 has-checkbox-focused:ring-offset-2 has-checkbox-focused:ring-offset-base-100 dark:has-checkbox-focused:ring-offset-base-800 relative me-2 box-content h-5 w-10 rounded-full border-2 shadow-inner transition-colors"
        data-toggle-switch-track
      >
        <input
          ref={ref}
          type="checkbox"
          data-testid="testmy-toggle-switch-checkbox"
          data-toggle-switch-checkbox
          className="peer absolute h-0 w-0 opacity-0"
          {...props}
        />
        <div
          className="bg-base-500 ease-[cubic-bezier(0.175, 0.885, 0.320, 1.275)]  peer-checked:bg-accent-700 absolute left-0 top-0 h-5 w-5 scale-95 rounded-full shadow transition-all peer-checked:left-1/2 peer-checked:right-0 "
          data-toggle-switch-knob
        ></div>
      </div>
      {children}
    </label>
  );
});

ToggleSwitch.displayName = 'ToggleSwitch';
