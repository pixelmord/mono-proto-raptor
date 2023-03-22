import { ComponentProps, PropsWithChildren, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTableContext } from './TableContext';
export type TableRowProps = PropsWithChildren<ComponentProps<'tr'>>;
export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({ children, className, ...props }, ref) => {
  const { hoverable, striped } = useTableContext();
  const classString = twMerge(
    'bg-white dark:border-gray-700 dark:bg-gray-800',
    striped && 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700',
    hoverable && 'hover:bg-gray-50 dark:hover:bg-gray-600',
    className
  );
  return (
    <tr ref={ref} data-testid="table-row-element" className={classString} {...props}>
      {children}
    </tr>
  );
});
TableRow.displayName = 'TableRow';
export default TableRow;
