import { twMerge } from 'tailwind-merge';
import { containerStyle, ContainerStyleProps } from './Container.style';

export interface ContainerProps
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>,
    ContainerStyleProps {}

export const Container: React.FC<ContainerProps> = ({ className, hspace = 'page', ...props }) => {
  className = twMerge(containerStyle({ hspace, className }));
  return <div className={className} {...props} />;
};
