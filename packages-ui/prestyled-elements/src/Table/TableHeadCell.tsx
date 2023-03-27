import { ComponentProps, PropsWithChildren, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TableHeadCellProps extends PropsWithChildren, ComponentProps<'th'> {}
export const TableHeadCell = forwardRef<HTMLTableCellElement, TableHeadCellProps>(
  ({ children, className, ...props }, ref) => {
    const classString = twMerge('px-6 py-3', className);
    return (
      <th ref={ref} className={classString} {...props}>
        {children}
      </th>
    );
  }
);
TableHeadCell.displayName = 'TableHeadCell';
