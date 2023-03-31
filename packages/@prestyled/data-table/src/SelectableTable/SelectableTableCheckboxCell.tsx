import { useCheckbox, useTableCell, useTableSelectionCheckbox, mergeProps } from 'react-aria';
import { GridNode } from '@react-types/grid';
import { Checkbox, Table, TableCellProps } from '../../../elements/dist';
import { FC, useRef } from 'react';
import { TableState, useToggleState } from 'react-stately';
export type SelectableTableCheckboxCellProps = TableCellProps & {
  cell: GridNode<unknown> & { parentKey: string | number };
  state: TableState<object>;
};
export const SelectableTableCheckboxCell: FC<SelectableTableCheckboxCellProps> = ({ cell, state }) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const cbRef = useRef<HTMLInputElement>(null);
  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { checkboxProps } = useTableSelectionCheckbox({ key: cell.parentKey }, state);
  const cbState = useToggleState(checkboxProps);
  const { inputProps } = useCheckbox(checkboxProps, cbState, cbRef);

  return (
    <Table.Cell {...gridCellProps} ref={ref}>
      <Checkbox {...mergeProps(inputProps, checkboxProps)} />
    </Table.Cell>
  );
};
