import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@prestyled/elements';

const meta: Meta<typeof Checkbox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: '@prestyled/elements/Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};
