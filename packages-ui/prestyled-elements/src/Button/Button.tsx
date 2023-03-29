import * as React from 'react';

import { FiLoader } from 'react-icons/fi';
import { buttonStyle, ButtonStyleProps } from './Button.style';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyleProps {
  submitting?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ className, intent, size, children, submitting, ...props }) => {
  className = buttonStyle({ intent, size, className });
  return (
    <button className={className} {...props}>
      {submitting && <FiLoader className="h-6 w-6 animate-spin" />}
      {children}
    </button>
  );
};
