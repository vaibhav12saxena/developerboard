import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './TextArea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message...',
    rows: 4,
  },
};

export const Error: Story = {
  args: {
    placeholder: 'There is an error...',
    variant: 'error',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    variant: 'disabled',
    disabled: true,
  },
};
