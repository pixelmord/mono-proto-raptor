import { FC, useRef } from 'react';
import { mergeProps, useFocusRing, useTableColumnHeader } from 'react-aria';
import { TableHeadCellProps } from '../Table/TableHeadCell';
import { Table } from '../Table';
import { TableState } from 'react-stately';
import { GridNode } from '@react-types/grid';

export type SelectableTableHeadCellProps = TableHeadCellProps & {
  column: GridNode<object>;
  state: TableState<object>;
};
export const SelectableTableHeadCell: FC<SelectableTableHeadCellProps> = ({ column, state }) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const { columnHeaderProps } = useTableColumnHeader({ node: column }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const arrowIcon = state.sortDescriptor?.direction === 'ascending' ? '▲' : '▼';

  return (
    <Table.HeadCell
      {...mergeProps(columnHeaderProps, focusProps)}
      colSpan={column.colspan}
      style={{
        textAlign: column.colspan && column.colspan > 1 ? 'center' : 'left',
        outline: isFocusVisible ? '2px solid orange' : 'none',
        cursor: 'default',
      }}
      ref={ref}
    >
      {column.rendered}
      {column.props.allowsSorting && (
        <span
          aria-hidden="true"
          style={{
            padding: '0 2px',
            visibility: state.sortDescriptor?.column === column.key ? 'visible' : 'hidden',
          }}
        >
          {arrowIcon}
        </span>
      )}
    </Table.HeadCell>
  );
};
