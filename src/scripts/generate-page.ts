const fs = require('fs');
const path = require('path');

const pageName = process.argv[2];

if (!pageName) {
  console.error('Please provide a page name');
  process.exit(1);
}

const pageFolder = path.join(__dirname, `..`, 'pages', pageName);
const indexedFilePath = path.join(pageFolder, `index.tsx`);
const testFilePath = path.join(pageFolder, `${pageName}.test.tsx`);

const indexFileContent = `import React from 'react';

const ${pageName} = () => {
    return (
        <div className="p-4 text-xl font-semibold text-gray-700">
            ${pageName} Page
        </div>
    )
}

export default ${pageName}
`;

const testFileContent = `import React from 'react';
import { render, screen } from '@testing-library/react';

describe('${pageName} Page', () => {
    it('renders correctly', () => {
        render(<${pageName} />);
        expect(screen.getByText('${pageName} Page')).toBeInTheDocument();
    });
});
`;

if (fs.existsSync(pageFolder)) {
  console.error('Page already exists');
  process.exit(1);
}

fs.mkdirSync(pageFolder);
fs.writeFileSync(indexedFilePath, indexFileContent);
fs.writeFileSync(testFilePath, testFileContent);

console.log(`Page ${pageName} created  successfully`);
process.exit(0);
