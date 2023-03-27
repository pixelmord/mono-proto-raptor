import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { FiLoader } from 'react-icons/fi';
export const buttonStyle = cva(
  'button group inline-flex items-center border justify-center rounded font-semibold shadow-sm',
  {
    variants: {
      intent: {
        primary: [
          'bg-accent-700',
          'text-white',
          'border-transparent',
          'hover:bg-accent-600',
          'focus:outline-none',
          'focus:ring-2',
          'focus:ring-accent-500',
          'focus:ring-offset-2',
          'focus:outline-none',
          'focus-visible:outline-2',
          'focus-visible:outline-offset-2',
        ],
        secondary: [
          'bg-accent-100',
          'text-accent-700',
          'border-transparent',
          'hover:bg-accent-200',
          'focus:outline-none',
          'focus:ring-2',
          'focus:ring-accent-500',
          'focus:ring-offset-2',
          'focus:outline-none',
          'focus-visible:outline-2',
          'focus-visible:outline-offset-2',
        ],
        tertiary: [
          'bg-base-200',
          'text-base-700',
          'border-transparent',
          'hover:bg-base-50',
          'focus:outline-none',
          'focus:ring-2',
          'focus:ring-accent-500',
          'focus:ring-offset-2',
          'focus:outline-none',
          'focus-visible:outline-2',
          'focus-visible:outline-offset-2',
        ],
        outline: [
          'ring-1',
          'focus:outline-none',
          'ring-slate-200',
          'text-slate-700',
          'hover:text-slate-900',
          'hover:ring-slate-300',
          'active:bg-slate-100',
          'active:text-slate-600',
          'focus-visible:outline-accent-600',
          'focus-visible:ring-slate-300',
        ],
      },
      size: {
        xsmall: ['text-sm', 'py-1.5', 'px-2.5'],
        small: ['text-sm', 'py-2', 'px-3'],
        medium: ['text-base', 'py-2', 'px-4'],
        large: ['text-base', 'py-2', 'px-4'],
        xlarge: ['text-base', 'py-3', 'px-6'],
      },
    },
    compoundVariants: [
      {
        intent: 'primary',
        size: 'medium',
        className: '',
      },
      {
        intent: 'secondary',
        size: 'medium',
        className: '',
      },
      {
        intent: 'tertiary',
        size: 'medium',
        className: '',
      },
      {
        intent: 'outline',
        size: 'medium',
        className: '',
      },
    ],
    defaultVariants: {
      intent: 'secondary',
      size: 'medium',
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyle> {
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
