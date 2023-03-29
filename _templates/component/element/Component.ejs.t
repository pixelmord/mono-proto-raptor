---
to: "<%= h.src() %>/packages-ui/prestyled-elements/src/<%= Name %>/<%= Name %>.tsx"
---
import { twMerge } from 'tailwind-merge';
import { <%= name %>Style, <%= Name %>StyleProps } from './<%= Name %>.style';

export type <%= Name %>Props = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & <%= Name %>StyleProps;

export const <%= Name %>: React.FC<<%= Name %>Props> = ({ className, ...props }) => {
  className = twMerge(<%= name %>Style({ className }));
  return <div className={className} {...props} />;
};
