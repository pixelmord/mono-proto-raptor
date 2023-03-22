import { mergeProps, useFocusRing, useTableCell } from 'react-aria';
import { Table } from '../Table';
import { FC, useRef } from 'react';
import { TableCellProps } from '../Table/TableCell';

export type SelectableTableCellProps = TableCellProps & {
  cell: any;
  state: any;
};
export const SelectableTableCell: FC<SelectableTableCellProps> = ({ cell, state }) => {
  const ref = useRef<HTMLTableCellElement>(null);

  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Table.Cell
      {...mergeProps(gridCellProps, focusProps)}
      style={{
        outline: isFocusVisible ? '2px solid orange' : 'none',
        cursor: 'default',
      }}
      ref={ref}
    >
      {cell.rendered}
    </Table.Cell>
  );
};
