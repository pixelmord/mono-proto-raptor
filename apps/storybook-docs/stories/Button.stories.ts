import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@prestyled/elements';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: '@prestyled/Elements/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: { intent: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'outline'] } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    intent: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    children: 'Button',
  },
};
export const Tertiary: Story = {
  args: {
    intent: 'tertiary',
    children: 'Button',
  },
};
export const Outline: Story = {
  args: {
    intent: 'outline',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};
