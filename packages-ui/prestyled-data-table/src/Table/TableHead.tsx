import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTableRowGroup } from 'react-aria';
export type TableHeadProps = PropsWithChildren<ComponentProps<'thead'>>;

export const TableHead: FC<TableHeadProps> = ({ children, className, ...props }) => {
  const { rowGroupProps } = useTableRowGroup();
  const classString = twMerge('px-6 py-4', className);
  return (
    <thead className={classString} {...rowGroupProps} {...props}>
      {children}
    </thead>
  );
};
