import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@prestyled/elements';

const meta: Meta<typeof Alert> = {
  title: '@prestyled/elements/Alert',
  tags: ['autodocs'],
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: 'This is an alert',
    intent: 'info',
  },
};
