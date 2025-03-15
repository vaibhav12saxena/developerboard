import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { MailIcon } from '../../../assets/icons/mail';
import { CheckIcon } from '../../../assets/icons/checkbox';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Email',
    leftIcon: <MailIcon size={16} />,
    rightIcon: <CheckIcon size={16} />,
    placeholder: 'you@example.com',
  },
};

export const WithPrefixSuffix: Story = {
  args: {
    label: 'Amount',
    prefix: '$',
    suffix: 'USD',
    placeholder: 'Enter amount',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Username',
    error: 'Username is required',
    placeholder: 'Enter username',
  },
};

export const ControlledInput: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return (
      <Input
        label="Controlled"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Type something"
      />
    );
  },
};

export const UncontrolledInput: Story = {
  args: {
    label: 'Uncontrolled',
    defaultValue: 'John Doe',
    placeholder: 'Type here',
  },
};

export const DebouncedInput: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return (
      <>
        <Input
          label="Debounced"
          placeholder="Start typing..."
          debounceTime={1000}
          onDebouncedChange={(v) => setVal(v)}
        />
        <p className="text-sm mt-2">Debounced Value: {val}</p>
      </>
    );
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'I stretch full width',
    fullWidth: true,
  },
};

export const OnlyPlaceholder: Story = {
  args: {
    placeholder: 'Type something...',
  },
};

export const DisabledInput: Story = {
  args: {
    label: 'Disabled',
    placeholder: 'Can’t type here',
    disabled: true,
  },
};

export const CustomPrefixComponent: Story = {
  args: {
    label: 'Phone Number',
    prefix: (
      <div className="text-sm font-medium text-gray-500 border-r pr-2 mr-2">
        +91
      </div>
    ),
    placeholder: '98765 43210',
  },
};
