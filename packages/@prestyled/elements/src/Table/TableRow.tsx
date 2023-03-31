import { ComponentProps, PropsWithChildren, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type TableRowProps = PropsWithChildren<ComponentProps<'tr'>> & {
  hoverable?: boolean;
  striped?: boolean;
};
export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({ children, className, ...props }, ref) => {
  const { hoverable, striped } = props;
  const classString = twMerge(
    'bg-white dark:border-base-700 dark:bg-base-800',
    striped && 'odd:bg-white even:bg-base-50 odd:dark:bg-base-800 even:dark:bg-base-700',
    hoverable && 'hover:bg-base-50 dark:hover:bg-base-600',
    className
  );
  return (
    <tr ref={ref} data-testid="table-row-element" className={classString} {...props}>
      {children}
    </tr>
  );
});
TableRow.displayName = 'TableRow';
