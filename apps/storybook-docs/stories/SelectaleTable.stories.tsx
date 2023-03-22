import type { Meta, StoryFn } from '@storybook/react';
import { SelectableTable, SelectableTableProps } from '@prestyled/data-table';
import { Key, ReactElement } from 'react';
const meta: Meta<typeof SelectableTable> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: '@prestyled/data-table/SelectableTable',
  tags: ['autodocs'],
  component: SelectableTable,
};

export default meta;
type Story = StoryFn<typeof SelectableTable>;

const TableTemplate: Story = (args: SelectableTableProps) => {
  const columns = [
    {
      header: 'First Name',
      key: 'firstName',
    },
    {
      header: 'Last Name',
      key: 'lastName',
    },
    {
      header: <span className="text-blue-500">Age</span>,
      key: 'age',
    },
  ];
  const data: Record<string, string | number>[] = [
    {
      id: 1,
      firstName: 'Kermit',
      lastName: 'Muppet',
      age: 55,
    },
    {
      id: 2,
      firstName: 'MS. Piggy',
      lastName: 'Muppet',
      age: 22,
    },
    {
      id: 3,
      firstName: 'Swedish Chef',
      lastName: 'Muppet',
      age: 24,
    },
  ];
  return (
    <SelectableTable {...args}>
      <SelectableTable.Head columns={columns}>
        {(column: { header: string | ReactElement; key: string }) => (
          <SelectableTable.Column>{column.header}</SelectableTable.Column>
        )}
      </SelectableTable.Head>
      <SelectableTable.Body items={data}>
        {(item: Record<string, string | number>) => (
          <SelectableTable.Row>
            {(columnKey: Key) => <SelectableTable.Cell>{item[columnKey]}</SelectableTable.Cell>}
          </SelectableTable.Row>
        )}
      </SelectableTable.Body>
    </SelectableTable>
  );
};

export const Default: Story = TableTemplate.bind({});

Default.args = {
  striped: false,
  hoverable: false,
  selectionMode: 'single',
};

export const MultipleSelection: Story = TableTemplate.bind({});
MultipleSelection.args = {
  ...Default.args,
  selectionMode: 'multiple',
  striped: true,
};
export const ClickableRows: Story = TableTemplate.bind({});
ClickableRows.args = {
  ...Default.args,
  onRowAction: (key: Key) => alert(`Opening item ${key}...`),
  striped: true,
  hoverable: true,
};
