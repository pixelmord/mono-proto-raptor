import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { RefObject } from 'react';
import { forwardRef } from 'react';
import { AriaCheckboxProps } from 'react-aria';
import { twMerge } from 'tailwind-merge';
import { useToggleState } from 'react-stately';
import { useCheckbox } from 'react-aria';
export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & AriaCheckboxProps;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const cbRef: RefObject<HTMLInputElement> = (ref as unknown as RefObject<HTMLInputElement>) || checkboxRef;
  const { children } = props;
  const state = useToggleState(props);
  const { inputProps } = useCheckbox(props, state, cbRef);
  return (
    <label className="inline-block">
      <input
        ref={cbRef}
        type="checkbox"
        className={twMerge(
          'h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600',
          className
        )}
        {...inputProps}
      />
      {children}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
