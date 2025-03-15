// components/atoms/Dropdown/Dropdown.stories.tsx
import type { Meta, StoryFn } from '@storybook/react';
import { Dropdown, DropdownProps } from './Dropdown';
import { useState } from 'react';
import { User, Mail, Bell } from 'lucide-react';

const meta: Meta<typeof Dropdown> = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};
export default meta;

const Template: StoryFn<typeof Dropdown> = (args: DropdownProps) => {
  const [selected, setSelected] = useState<any>(null);
  return (
    <div className="p-6">
      <Dropdown
        {...args}
        onSelect={(option) => {
          setSelected(option);
          args.onSelect(option); // pass back to Storybook logs
        }}
      />
      <p className="mt-4 text-sm text-gray-600">
        Selected:{' '}
        {Array.isArray(selected)
          ? selected.map((s) => s.label).join(', ')
          : selected?.label}
      </p>
    </div>
  );
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  placeholder: 'Choose a service',
  options: [
    { label: 'Profile', value: 'profile', icon: <User size={16} /> },
    {
      label: 'Notifications',
      value: 'notifications',
      icon: <Bell size={16} />,
    },
    { label: 'Messages', value: 'messages', icon: <Mail size={16} /> },
  ],
  onSelect: (val) => console.log(val),
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  placeholder: 'Choose items',
  multiselect: true,
  options: [
    { label: 'React', value: 'react', icon: <span>⚛️</span> },
    { label: 'Vue', value: 'vue', icon: <span>🟢</span> },
    { label: 'Svelte', value: 'svelte', icon: <span>🔥</span> },
  ],
  onSelect: (val) => console.log(val),
};
