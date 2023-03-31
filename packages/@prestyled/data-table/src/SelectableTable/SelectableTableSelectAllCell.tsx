import { mergeProps, useCheckbox, useTableColumnHeader, useTableSelectAllCheckbox, VisuallyHidden } from 'react-aria';
import { Table, Checkbox, TableHeadCellProps } from '../../../elements/dist';
import { FC, useRef } from 'react';
import { TableState, useToggleState } from 'react-stately';
import { GridNode } from '@react-types/grid';

export type SelectaleTableSelectAllCellProps = TableHeadCellProps & {
  column: GridNode<object>;
  state: TableState<object>;
};
export const SelectaleTableSelectAllCell: FC<SelectaleTableSelectAllCellProps> = ({ column, state }) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const cbRef = useRef<HTMLInputElement>(null);
  const { columnHeaderProps } = useTableColumnHeader({ node: column }, state, ref);
  const { checkboxProps } = useTableSelectAllCheckbox(state);
  const cbState = useToggleState(checkboxProps);
  const { inputProps } = useCheckbox(checkboxProps, cbState, cbRef);
  return (
    <Table.HeadCell {...columnHeaderProps} ref={ref}>
      {state.selectionManager.selectionMode === 'single' ? (
        <VisuallyHidden>{checkboxProps['aria-label']}</VisuallyHidden>
      ) : (
        <Checkbox {...mergeProps(inputProps, checkboxProps)} />
      )}
    </Table.HeadCell>
  );
};
