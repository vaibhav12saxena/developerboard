/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button text="Test text" variant="primary" />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});
