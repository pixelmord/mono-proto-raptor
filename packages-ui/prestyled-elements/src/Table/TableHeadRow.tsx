import { ComponentProps, PropsWithChildren, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
export type TableHeadRowProps = PropsWithChildren<ComponentProps<'tr'>>;

export const TableHeadRow = forwardRef<HTMLTableRowElement, TableHeadRowProps>(
  ({ children, className, ...props }, ref) => {
    const classString = twMerge('bg-gray-50 dark:bg-gray-700', className);
    return (
      <tr ref={ref} data-testid="table-header-row-element" className={classString} {...props}>
        {children}
      </tr>
    );
  }
);
TableHeadRow.displayName = 'TableHeadRow';
