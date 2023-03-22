import { useRef, FC, ComponentProps, PropsWithChildren } from 'react';
import { Node } from '@react-types/shared';
import { mergeProps, useFocusRing, useTableHeaderRow, useTableRow } from 'react-aria';
import { Table } from '../Table';
import { TableState } from 'react-stately';

export type SelectableTableRowProps = PropsWithChildren<ComponentProps<'tr'>> & {
  item: Node<unknown>;
  state: TableState<object>;
};
export const SelectableTableRow: FC<SelectableTableRowProps> = ({ item, state, children }) => {
  const ref = useRef<HTMLTableRowElement>(null);
  const isSelected = state.selectionManager.isSelected(item.key);
  const { rowProps, isPressed } = useTableRow(
    {
      node: item,
    },
    state,
    ref
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Table.Row {...mergeProps(rowProps, focusProps)} ref={ref}>
      {children}
    </Table.Row>
  );
};
