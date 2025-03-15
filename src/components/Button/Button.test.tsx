/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button text="Test text" variant="primary" />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});

describe('Button', () => {
  it('renders with label', () => {
    render(<Button text="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('has correct variant class', () => {
    const { container } = render(<Button text="Test" variant="outline" />);
    expect(container.firstChild).toHaveClass('btn-outline');
  });
});
