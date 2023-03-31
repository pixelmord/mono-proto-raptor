import { useRef, FC, ComponentProps, PropsWithChildren } from 'react';
import { Node } from '@react-types/shared';
import { mergeProps, useFocusRing, useTableRow } from 'react-aria';
import { Table } from '../../../elements/dist';
import { TableState } from 'react-stately';

export type SelectableTableRowProps = PropsWithChildren<ComponentProps<'tr'>> & {
  item: Node<unknown>;
  state: TableState<object>;
  striped?: boolean;
  hoverable?: boolean;
};
export const SelectableTableRow: FC<SelectableTableRowProps> = ({ item, state, striped, hoverable, children }) => {
  const ref = useRef<HTMLTableRowElement>(null);

  const _isSelected = state.selectionManager.isSelected(item.key);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { rowProps, isPressed } = useTableRow(
    {
      node: item,
    },
    state,
    ref
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Table.Row striped={striped} hoverable={hoverable} {...mergeProps(rowProps, focusProps)} ref={ref}>
      {children}
    </Table.Row>
  );
};
