import type { Meta, StoryFn } from '@storybook/react';
import { DataTable, DataTableProps } from '@prestyled/data-table';
import { Key } from 'react';
const meta: Meta<typeof DataTable> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: '@prestyled/data-table/DataTable',
  tags: ['autodocs'],
  component: DataTable,
};

export default meta;
type Story = StoryFn<typeof DataTable>;

const TableTemplate: Story = (args: DataTableProps) => {
  const data: Record<string, string | number>[] = [
    {
      id: 'd1b69ff7-0693-4a21-9318-9362264106ca',
      firstName: 'Leonard',
      lastName: 'Morar',
      age: 96,
    },
    {
      id: '93f08d30-5d27-48db-aece-a89c686aa757',
      firstName: 'Lavada',
      lastName: 'Will',
      age: 57,
    },
    {
      id: '38700ac8-1712-4220-bdf1-5cf7ba9c5689',
      firstName: 'Dan',
      lastName: "O'Kon",
      age: 45,
    },
    {
      id: 'a33a5473-1812-4fda-85aa-0379657abb4b',
      firstName: 'Orin',
      lastName: 'Littel',
      age: 42,
    },
    {
      id: '49f80183-4a86-4f8c-99e9-dcc0ce015288',
      firstName: 'Mitchell',
      lastName: 'Stanton',
      age: 28,
    },
    {
      id: '72679f2a-e1bf-4ee1-bcb0-25ad5bea390f',
      firstName: 'Chyna',
      lastName: 'Rolfson',
      age: 2,
    },
    {
      id: '5f9dfa51-2ec0-4f0f-b0dc-41a3a2a3a63d',
      firstName: 'Mervin',
      lastName: 'Rau',
      age: 13,
    },
    {
      id: '076da110-1e17-4b52-9a93-fda5c4e50b79',
      firstName: 'Cade',
      lastName: 'Senger',
      age: 64,
    },
    {
      id: '3f22ece4-eee3-41e2-ab49-dc88f4d75dc6',
      firstName: 'Berenice',
      lastName: 'Zieme',
      age: 97,
    },
    {
      id: '4000951e-73dd-4a36-9670-0082f40f7812',
      firstName: 'Marion',
      lastName: 'Pfeffer',
      age: 84,
    },
  ];
  return <DataTable initialData={data} {...args} />;
};

export const Default: Story = TableTemplate.bind({});

Default.args = {
  striped: false,
  hoverable: false,
  selectionMode: 'single',
  totalItems: 100,
  itemsPerPage: 10,
  fetcher: (skip: number, take: number) => {
    return fetch(`https://my.backend/users?take=${take}&skip=${skip}`).then((res) => res.json());
  },
  onRowAction: (key: Key) => alert(`Opening item ${key}...`),
  columns: [
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
  ],
};

export const MultipleSelection: Story = TableTemplate.bind({});
MultipleSelection.args = {
  ...Default.args,
  selectionMode: 'multiple',
  striped: true,
  onRowAction: (key: Key) => console.info(`Opening items ${key}...`),
  hoverable: true,
};
