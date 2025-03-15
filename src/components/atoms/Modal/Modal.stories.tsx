import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Atoms/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { table: { disable: true } }, // hide since we control internally
    onClose: { table: { disable: true } },
  },
};
export default meta;

// ✅ Template that still shows modal on button click, but keeps prop visibility
const Template: StoryFn<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Open Modal
      </button>
      <Modal {...args} isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Hello Modal',
  children: 'This is a modal content.',
  showCloseIcon: true,
};

export const WithoutCloseIcon = Template.bind({});
WithoutCloseIcon.args = {
  title: 'No Close Icon',
  children: 'This modal has no close icon.',
  showCloseIcon: false,
};

export const ScrollableContent = Template.bind({});
ScrollableContent.args = {
  title: 'Scrollable Modal',
  children: (
    <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
      {Array.from({ length: 30 }, (_, i) => (
        <p key={i}>Line {i + 1}</p>
      ))}
    </div>
  ),
};
