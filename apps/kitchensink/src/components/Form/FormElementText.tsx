import React from 'react';
import { FieldError } from 'react-hook-form';
import { FormFieldText, Label } from 'prestyled-elements';

export type FormElementTextProps = {
  label?: string;
  id: string;
  type?: 'text' | 'number' | 'password';
  error?: FieldError | any;
} & React.InputHTMLAttributes<HTMLInputElement>;
export const FormElementText = React.forwardRef<HTMLInputElement, FormElementTextProps>(
  ({ label, id, type = 'text', error, ...rest }: FormElementTextProps, ref) => {
    const state = error ? 'error' : 'default';
    return (
      <div className="my-4">
        {!!label && (
          <Label htmlFor={id} state={state} className="px-1">
            {label}
          </Label>
        )}
        <FormFieldText id={id} name={id} type={type} state={state} ref={ref} {...rest} />
        {!!error?.message && <p className="mt-1 px-1 text-xs text-danger-600 dark:text-danger-400">{error.message}</p>}
      </div>
    );
  }
);
FormElementText.displayName = 'FormElementText';
