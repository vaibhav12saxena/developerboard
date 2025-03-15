import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    text: 'Click Me',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    text: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    text: 'Outline Button',
  },
};

export const WithChildren: Story = {
  args: {
    variant: 'primary',
    children: <span>Custom Content</span>,
  },
};
