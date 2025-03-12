/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input label="Test text" />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});
