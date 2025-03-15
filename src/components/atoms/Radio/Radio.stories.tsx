
import { Radio } from './Radio';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'sample-radio',
    value: 'option1',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Radio',
    name: 'sample-radio',
    disabled: true,
  },
};
