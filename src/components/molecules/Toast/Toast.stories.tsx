// src/components/Toast/Toast.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { useState } from 'react';

const meta: Meta<typeof Toast> = {
  title: 'Molecules/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'info', 'warning'],
      description: 'Type of the toast',
    },
    message: {
      control: 'text',
      description: 'Message to display in the toast',
    },
    onClose: {
      action: 'clicked',
      description: 'Callback for close button',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is the **visual-only Toast** component. Use `addToast()` from context in real usage. This version is for documenting props clearly in Storybook.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'This is a success toast!',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Something went wrong!',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: 'This is an informational toast.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Be careful!',
  },
};

export const InteractiveToast = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setShow(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Show Toast
      </button>

      {show && (
        <Toast
          type="success"
          message="This toast appears on click!"
          onClose={() => setShow(false)}
        />
      )}
    </div>
  );
};

InteractiveToast.storyName = 'Interactive Example';
InteractiveToast.parameters = {
  docs: {
    description: {
      story:
        'Click the button to trigger the toast. This is just a simulation — real usage should go through `ToastContext`.',
    },
  },
};
