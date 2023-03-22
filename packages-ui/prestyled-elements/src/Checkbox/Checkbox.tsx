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
          'h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600',
          className
        )}
        {...props}
      />
      {children}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
