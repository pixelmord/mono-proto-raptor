import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Avatar } from '@prestyled/elements';

const meta: Meta<typeof Avatar> = {
  title: '@prestyled/elements/Avatar',
  tags: ['autodocs'],
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    alt: 'Your avatar',
  },
};
export const CustomImage: Story = {
  args: {
    alt: 'Your avatar',
    img: (props) => (
      <picture>
        <source media="(min-width: 900px)" srcSet="https://loremflickr.com/600/600/face,woman" />
        <source media="(min-width: 480px)" srcSet="https://loremflickr.com/600/600/face,woman" />
        <img src="https://loremflickr.com/600/600/face,man" {...props} alt="avatar" />
      </picture>
    ),
  },
};
