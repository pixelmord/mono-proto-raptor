import { ComponentProps, PropsWithChildren, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TableCellProps extends PropsWithChildren, ComponentProps<'td'> {}
export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(({ children, className, ...props }, ref) => {
  const classString = twMerge('px-6 py-4', className);
  return (
    <td ref={ref} className={classString} {...props}>
      {children}
    </td>
  );
});
TableCell.displayName = 'TableCell';
