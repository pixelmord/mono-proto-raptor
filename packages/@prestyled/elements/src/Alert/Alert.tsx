import { twMerge } from 'tailwind-merge';
import { alertStyle, AlertStyleProps } from './Alert.style';

export type AlertProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> &
  AlertStyleProps & {
    classNamesFn?: (args: AlertStyleProps) => string;
  };

export const Alert: React.FC<AlertProps> = ({ className, state, classNamesFn = alertStyle, ...props }) => {
  className = twMerge(classNamesFn({ state, className }));
  return <div className={className} {...props} />;
};
