import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@prestyled/elements';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: '@prestyled/Elements/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    intent: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'outline'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    intent: 'primary',
    children: 'Button',
    size: 'md',
    submitting: false,
  },
};
export const PrimarySubmitting: Story = {
  args: {
    intent: 'primary',
    children: 'Save',
    size: 'md',
    submitting: true,
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    children: 'Button',
    size: 'md',
  },
};
export const Tertiary: Story = {
  args: {
    intent: 'tertiary',
    children: 'Button',
    size: 'md',
  },
};
export const Outline: Story = {
  args: {
    intent: 'outline',
    children: 'Button',
    size: 'md',
  },
};
export const XSmall: Story = {
  args: {
    size: 'xs',
    children: 'XSmall Button',
  },
};
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};
