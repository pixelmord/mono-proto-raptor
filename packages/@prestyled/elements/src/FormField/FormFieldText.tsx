import React from 'react';
import { fieldStyle, FieldStyleProps } from './Field.style';

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement>, FieldStyleProps {}
export const FormFieldText = React.forwardRef<HTMLInputElement, FieldProps>(
  ({ type = 'text', state, className, ...rest }: FieldProps, ref) => {
    className = fieldStyle({ state, className });
    return <input type={type} className={className} {...rest} ref={ref} />;
  }
);
FormFieldText.displayName = 'FormFieldText';
