import { twMerge } from 'tailwind-merge';
import { alertStyle, AlertStyleProps } from './Alert.style';

export type AlertProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> &
  AlertStyleProps & {
    classNamesFn?: (args: AlertStyleProps) => string;
  };

export const Alert: React.FC<AlertProps> = ({ className, intent, classNamesFn = alertStyle, ...props }) => {
  className = twMerge(classNamesFn({ intent, className }));
  return <div className={className} {...props} />;
};
