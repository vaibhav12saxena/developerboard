/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox checked={false} onChange={function (): void {
      throw new Error('Function not implemented.');
    } }  />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});