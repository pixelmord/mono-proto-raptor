---
to: "<%= h.src() %>/apps/storybook-docs/stories/<%= Name %>.story.ts"
---
import type { Meta, StoryObj } from '@storybook/react';
import { <%= Name %> } from '@prestyled/elements';

const meta: Meta<typeof <%= Name %>> = {
  title: '@prestyled/elements/<%= Name %>',
  tags: ['autodocs'],
  component: <%= Name %>,
};

export default meta;
type Story = StoryObj<typeof <%= Name %>>;

export const Default: Story = {
  args: {},
};
