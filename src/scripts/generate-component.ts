const fs = require('fs');
const path = require('path');

/**
 * Generate a component folder structure with:
 * - index.ts
 * - Component.tsx
 * - Component.test.tsx
 * - Component.stories.tsx
 */

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Please provide a component name.');
  process.exit(1);
}

const componentDir = path.join(
  __dirname,
  '..',
  '..',
  'src',
  'components',
  'atoms',
  componentName
);

if (fs.existsSync(componentDir)) {
  console.error('❌ Component already exists.');
  process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

// 👉 Component file
const componentTsx = `
import React from 'react';

export interface ${componentName}Props {
  /** Example prop - describe it properly */
  text?: string;
}

export const ${componentName}: React.FC<${componentName}Props> = ({ text }) => {
  return <div>{text || "${componentName} component"}</div>;
};
`;

fs.writeFileSync(`${componentDir}/${componentName}.tsx`, componentTsx.trim());

// 👉 index.ts file
const indexFile = `
export * from './${componentName}';
`;

fs.writeFileSync(`${componentDir}/index.ts`, indexFile.trim());

// 👉 test file
const testFile = `
/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  it('renders correctly', () => {
    render(<${componentName} text="Test text" />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});
`;

fs.writeFileSync(`${componentDir}/${componentName}.test.tsx`, testFile.trim());
const formattedPath = componentName.split('/').pop();
// 👉 storybook file
const storiesFile = `
import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: 'Atoms/${formattedPath}',
  component: ${componentName},
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Primary: Story = {
  args: {
    text: '${componentName} rendered from Storybook',
  },
};
`;

fs.writeFileSync(
  `${componentDir}/${componentName}.stories.tsx`,
  storiesFile.trim()
);

console.log(`✅ ${componentName} component generated successfully.`);
