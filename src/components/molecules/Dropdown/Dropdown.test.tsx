/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  it('renders correctly', () => {
    render(
      <Dropdown
        options={[]}
        onSelect={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});
