import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'User avatar',
  },
};

export const WithInitials: Story = {
  args: {
    name: 'Vaibhav Saxena',
  },
};

export const Small: Story = {
  args: {
    name: 'VS',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    name: 'Vaibhav Saxena',
    size: 'lg',
  },
};
