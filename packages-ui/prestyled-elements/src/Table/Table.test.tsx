import { render, screen } from '@testing-library/react';
import type { FC, ReactElement, Ref } from 'react';

import type { TableProps } from './Table';
import { Table } from './Table';

describe('Components / Table', () => {
  it('should be able to render a table', () => {
    render(<TestTable />);

    expect(screen.getByTestId('table-element')).toBeTruthy();
  });

  it('should be able to render a striped table', () => {
    render(<TestTable striped />);

    const rows = screen.getAllByTestId('table-row-element');

    expect(rows.length).toEqual(3);
    expect(rows[0].className as string).toContain(
      'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'
    );
  });

  it('should be able to render a hoverable table', () => {
    render(<TestTable hoverable />);

    const rows = screen.getAllByTestId('table-row-element');

    expect(rows.length).toEqual(3);
    expect(rows[0].className).toContain('hover:bg-gray-50 dark:hover:bg-gray-600');
  });
});

const TestTable: FC<TableProps & { ref?: Ref<HTMLTableElement>; striped?: boolean; hoverable?: boolean }> = (props) => {
  const { striped, hoverable } = props;
  const columns: { header: string | ReactElement; accessor: string }[] = [
    {
      header: 'First Name',
      accessor: 'firstName',
    },
    {
      header: 'Last Name',
      accessor: 'lastName',
    },
    {
      header: <span className="text-blue-500">Age</span>,
      accessor: 'age',
    },
  ];
  const data: Record<string, string | number>[] = [
    {
      firstName: 'Kermit',
      lastName: 'Muppet',
      age: 55,
    },
    {
      firstName: 'MS. Piggy',
      lastName: 'Muppet',
      age: 22,
    },
    {
      firstName: 'Swedish Chef',
      lastName: 'Muppet',
      age: 24,
    },
  ];
  return (
    <Table {...props}>
      <Table.Head>
        <Table.HeadRow>
          {columns.map((col, index) => (
            <Table.HeadCell key={index}>{col.header}</Table.HeadCell>
          ))}
        </Table.HeadRow>
      </Table.Head>
      <Table.Body className="divide-y">
        {data.map((datum, index) => (
          <Table.Row
            key={index}
            striped={striped}
            hoverable={hoverable}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            {columns.map((col, index) => (
              <Table.Cell key={index}>{datum[col.accessor]}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
