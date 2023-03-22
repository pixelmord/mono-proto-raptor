import { useTableColumnHeader, useTableSelectAllCheckbox, VisuallyHidden } from 'react-aria';
import { Table } from '../Table';
import { Checkbox } from '../Checkbox';
import { TableHeadCellProps } from '../Table/TableHeadCell';
import { FC, useRef } from 'react';
import { TableState } from 'react-stately';
import { GridNode } from '@react-types/grid';

export type SelectaleTableSelectAllCellProps = TableHeadCellProps & {
  column: GridNode<object>;
  state: TableState<object>;
};
export const SelectaleTableSelectAllCell: FC<SelectaleTableSelectAllCellProps> = ({ column, state }) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const { columnHeaderProps } = useTableColumnHeader({ node: column }, state, ref);
  const { checkboxProps } = useTableSelectAllCheckbox(state);

  return (
    <Table.HeadCell {...columnHeaderProps} ref={ref}>
      {state.selectionManager.selectionMode === 'single' ? (
        <VisuallyHidden>{checkboxProps['aria-label']}</VisuallyHidden>
      ) : (
        <Checkbox {...checkboxProps} />
      )}
    </Table.HeadCell>
  );
};
