import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { headlineStyle, HeadlineStyleProps } from './Headline.style';

export interface HeadlineProps
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>,
    HeadlineStyleProps {}

export const H1: React.FC<HeadlineProps> = ({ children, className, styling = 'h1', vspace = 'loose', ...rest }) => {
  className = twMerge(headlineStyle({ styling, vspace, className }));
  return (
    <h1 className={className} {...rest}>
      {children}
    </h1>
  );
};
export const H2: React.FC<HeadlineProps> = ({ children, className, styling = 'h2', vspace = 'loose', ...rest }) => {
  className = twMerge(headlineStyle({ styling, vspace, className }));
  return (
    <h2 className={className} {...rest}>
      {children}
    </h2>
  );
};
export const H3: React.FC<HeadlineProps> = ({ children, className, styling = 'h3', vspace = 'loose', ...rest }) => {
  className = twMerge(headlineStyle({ styling, vspace, className }));
  return (
    <h3 className={className} {...rest}>
      {children}
    </h3>
  );
};
export const H4: React.FC<HeadlineProps> = ({ children, className, styling = 'h4', vspace, ...rest }) => {
  className = twMerge(headlineStyle({ styling, vspace, className }));
  return (
    <h4 className={className} {...rest}>
      {children}
    </h4>
  );
};
export const H5: React.FC<HeadlineProps> = ({ children, className, styling = 'h5', vspace, ...rest }) => {
  className = twMerge(headlineStyle({ styling, vspace, className }));
  return (
    <h5 className={className} {...rest}>
      {children}
    </h5>
  );
};
export const H6: React.FC<HeadlineProps> = ({ children, className, styling = 'h6', vspace, ...rest }) => {
  className = twMerge(headlineStyle({ styling, vspace, className }));
  return (
    <h6 className={className} {...rest}>
      {children}
    </h6>
  );
};
