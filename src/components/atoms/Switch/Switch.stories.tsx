// Switch.stories.tsx
import { useState } from 'react';
import { Switch } from './Switch';
import { Meta } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  );
};
