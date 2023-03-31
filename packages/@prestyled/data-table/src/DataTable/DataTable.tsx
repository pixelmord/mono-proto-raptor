import { FC, Key, ReactElement, useState } from 'react';
import { SelectableTable, SelectableTableProps } from '../SelectableTable';
import { Pagination } from '../../../elements/dist';

type Column = { header: string | ReactElement; key: string | number };
type Datum = Record<Key, ReactElement>;

export type DataTableProps = Omit<SelectableTableProps, 'children'> & {
  totalItems: number;
  itemsPerPage: number;
  fetcher: (skip: number, take: number) => Promise<any>;
  initialData?: any;
  columns: Column[];
};

export const DataTable: FC<DataTableProps> = ({
  totalItems,
  itemsPerPage,
  fetcher,
  initialData,
  columns,
  ...props
}) => {
  const [data, setData] = useState(initialData || []);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetcher((page - 1) * itemsPerPage, itemsPerPage).then((data) => setData(data));
  };
  return (
    <>
      <SelectableTable selectionMode="multiple" {...props}>
        <SelectableTable.Head columns={columns}>
          {(column: Column) => <SelectableTable.Column>{column.header}</SelectableTable.Column>}
        </SelectableTable.Head>
        <SelectableTable.Body items={data}>
          {(item: Datum) => (
            <SelectableTable.Row>
              {(columnKey: Key) => <SelectableTable.Cell>{item[columnKey]}</SelectableTable.Cell>}
            </SelectableTable.Row>
          )}
        </SelectableTable.Body>
      </SelectableTable>
      <Pagination
        totalPages={totalItems / itemsPerPage}
        currentPage={currentPage}
        onPageChange={(page: number) => handlePageChange(page)}
        className="mx-auto"
      />
    </>
  );
};
