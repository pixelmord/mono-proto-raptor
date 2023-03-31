import { InputHTMLAttributes, forwardRef } from 'react';

import { twMerge } from 'tailwind-merge';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, children, ...props }, ref) => {
  return (
    <label className="inline-block">
      <input
        ref={ref}
        type="checkbox"
        className={twMerge(
          'bg-base-100 dark:bg-base-700 border-base-300 dark:border-base-600 focus:ring-accent-500 dark:focus:ring-accent-600 h-4 w-4 rounded border focus:ring-2 dark:ring-offset-gray-800',
          className
        )}
        {...props}
      />
      {children}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
