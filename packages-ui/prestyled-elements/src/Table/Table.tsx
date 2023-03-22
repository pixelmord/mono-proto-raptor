import { ComponentProps, PropsWithChildren, forwardRef } from 'react';

import { TableBody } from './TableBody';
import { TableCell } from './TableCell';

import { TableHead } from './TableHead';
import { TableHeadRow } from './TableHeadRow';
import { TableHeadCell } from './TableHeadCell';
import { twMerge } from 'tailwind-merge';

import { TableRow } from './TableRow';
export type TableProps = PropsWithChildren<ComponentProps<'table'>>;

const TableComponent = forwardRef<HTMLTableElement, TableProps>(({ children, className, ...props }, ref) => {
  const classString = twMerge('w-full text-left text-sm text-gray-500 dark:text-gray-400', className);

  return (
    <div data-testid="table-element" className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table ref={ref} className={classString} {...props}>
        {children}
      </table>
    </div>
  );
});

TableComponent.displayName = 'Table';
TableHead.displayName = 'Table.Head';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableHeadRow.displayName = 'Table.HeadRow';
TableCell.displayName = 'Table.Cell';
TableHeadCell.displayName = 'Table.HeadCell';

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  HeadRow: TableHeadRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
});
