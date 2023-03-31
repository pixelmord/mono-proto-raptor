import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@prestyled/elements';
import * as React from 'react';

const meta: Meta<typeof Badge> = {
  title: '@prestyled/elements/Badge',
  tags: ['autodocs'],
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export const Default: Story = {
  args: {
    children: 'badge',
  },
};
export const BadgeWithIcon: Story = {
  args: {
    intent: 'success',
    icon: CheckIcon,
    children: '2 minutes ago',
  },
};
export const BadgeOnlyIcon: Story = {
  args: {
    intent: 'warning',
    icon: CheckIcon,
  },
};
