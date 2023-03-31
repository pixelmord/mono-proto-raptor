import type { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { Avatar, AvatarGroupProps } from '@prestyled/elements';
const meta: Meta<typeof Avatar.Group> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: '@prestyled/elements/Avatar.Group',
  tags: ['autodocs'],
  component: Avatar.Group,
};

export default meta;
type Story = StoryFn<typeof Avatar.Group>;

const Template: Story = (args: AvatarGroupProps) => (
  <Avatar.Group {...args}>
    <Avatar img="https://loremflickr.com/600/600/face,man" rounded="full" alt="Avatar" stacked />
    <Avatar img="https://loremflickr.com/600/600/face,girl" rounded="full" alt="Avatar" stacked />
    <Avatar img="https://loremflickr.com/600/600/face,man" rounded="full" alt="Avatar" stacked />
    <Avatar img="https://loremflickr.com/600/600/face,woman" rounded="full" alt="Avatar" stacked />
    <Avatar.Counter total={99} href="#" />
  </Avatar.Group>
);

export const DefaultAvatarGroup: Story = Template.bind({});
DefaultAvatarGroup.storyName = 'Grouped';
DefaultAvatarGroup.args = {};
