import { AriaTableProps, SSRProvider, useTable } from 'react-aria';
import { Cell, Column, Row, TableBody, TableHeader, TableStateProps, useTableState } from 'react-stately';
import { FC, useRef } from 'react';
import { Table, TableProps } from '@prestyled/elements';
import { SelectableTableHeadRow } from './SelectableTableHeadRow';
import { SelectableTableHeadCell } from './SelectableTableHeadCell';
import { SelectableTableRow } from './SelectableTableRow';
import { SelectableTableCell } from './SelectableTableCell';
import { SelectableTableCheckboxCell } from './SelectableTableCheckboxCell';
import { SelectaleTableSelectAllCell } from './SelectableTableSelectAllCell';
import { GridNode } from '@react-types/grid';

export type SelectableTableProps = TableStateProps<object> &
  AriaTableProps<object> &
  TableProps & {
    hoverable?: boolean;
    striped?: boolean;
  };
const SelectableTableComponent: FC<SelectableTableProps> = (props) => {
  const { selectionMode, selectionBehavior, striped, hoverable } = props;
  const state = useTableState({
    ...props,
    showSelectionCheckboxes: selectionMode === 'multiple' && selectionBehavior !== 'replace',
  });

  const ref = useRef<HTMLTableElement>(null);
  const { collection } = state;
  const { gridProps } = useTable(props, state, ref);

  return (
    <SSRProvider>
      <Table {...gridProps} ref={ref} style={{ borderCollapse: 'collapse' }}>
        <Table.Head>
          {collection.headerRows.map((headerRow) => (
            <SelectableTableHeadRow key={headerRow.key} item={headerRow} state={state}>
              {[...headerRow.childNodes].map((column) =>
                column.props.isSelectionCell ? (
                  <SelectaleTableSelectAllCell key={column.key} column={column} state={state} />
                ) : (
                  <SelectableTableHeadCell key={column.key} column={column} state={state} />
                )
              )}
            </SelectableTableHeadRow>
          ))}
        </Table.Head>
        <Table.Body>
          {[...collection.body.childNodes].map((row) => (
            <SelectableTableRow striped={striped} hoverable={hoverable} key={row.key} item={row} state={state}>
              {[...row.childNodes].map((cell) =>
                cell.props.isSelectionCell ? (
                  <SelectableTableCheckboxCell
                    key={cell.key}
                    cell={cell as GridNode<unknown> & { parentKey: string | number }}
                    state={state}
                  />
                ) : (
                  <SelectableTableCell key={cell.key} cell={cell} state={state} />
                )
              )}
            </SelectableTableRow>
          ))}
        </Table.Body>
      </Table>
    </SSRProvider>
  );
};

SelectableTableComponent.displayName = 'SelectableTable';

export const SelectableTable = Object.assign(SelectableTableComponent, {
  Head: TableHeader,
  Body: TableBody,
  Row,
  Cell,
  Column,
});
