// Typography.stories.tsx

import { Typography } from './Typography';
import { TypographyProps } from './Typography.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography', // ✅ Correct title path
  component: Typography,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<TypographyProps>;

export const HeadingXL: Story = {
  args: {
    variant: 'headingXL',
    children: 'Heading XL Text',
  },
};

export const HeadingLg: Story = {
  args: {
    variant: 'headingLg',
    children: 'Heading Large Text',
  },
};

export const BodyMd: Story = {
  args: {
    variant: 'bodyMd',
    children: 'This is body medium',
  },
};
