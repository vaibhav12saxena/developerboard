/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders correctly', () => {
    render(<Switch />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});
