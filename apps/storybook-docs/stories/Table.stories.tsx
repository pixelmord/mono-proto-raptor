import type { Meta, StoryFn } from '@storybook/react';
import { Table, TableProps } from '@prestyled/elements';
import { Ref } from 'react';
const meta: Meta<typeof Table> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: '@prestyled/elements/Table',
  tags: ['autodocs'],
  component: Table,
};

export default meta;
type Story = StoryFn<typeof Table>;

const TableTemplate: Story = (args: TableProps & { ref?: Ref<HTMLTableElement> }) => {
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
    <Table {...args}>
      <Table.Head>
        <Table.HeadRow>
          {columns.map((col, index) => (
            <Table.HeadCell key={index}>{col.header}</Table.HeadCell>
          ))}
        </Table.HeadRow>
      </Table.Head>
      <Table.Body className="divide-y">
        {data.map((datum, index) => (
          <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-base-800">
            {columns.map((col, index) => (
              <Table.Cell key={index}>{datum[col.key]}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export const Default: Story = TableTemplate.bind({});

Default.args = {
  striped: false,
  hoverable: false,
};

export const Striped: Story = TableTemplate.bind({});
Striped.args = {
  ...Default.args,
  striped: true,
};
export const Hoverable: Story = TableTemplate.bind({});
Hoverable.args = {
  ...Default.args,
  striped: true,
  hoverable: true,
};
