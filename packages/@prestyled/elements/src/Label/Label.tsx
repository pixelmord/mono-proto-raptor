import { twMerge } from 'tailwind-merge';
import { labelStyle, LabelStyleProps } from './Label.style';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, LabelStyleProps {}
export function Label({ children, className, state, ...rest }: LabelProps) {
  className = twMerge(labelStyle({ state, className }));
  return (
    <label className={className} {...rest}>
      {children}
    </label>
  );
}
