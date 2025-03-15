import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Badge Component', () => {
  it('renders with default props', () => {
    render(<Badge label="Default Badge" />);
    const badge = screen.getByText('Default Badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-gray-100 text-gray-800');
  });

  it('renders with primary variant', () => {
    render(<Badge label="Primary Badge" variant="primary" />);
    const badge = screen.getByText('Primary Badge');
    expect(badge).toHaveClass('bg-blue-100 text-blue-800');
  });

  it('renders with success variant', () => {
    render(<Badge label="Success Badge" variant="success" />);
    const badge = screen.getByText('Success Badge');
    expect(badge).toHaveClass('bg-green-100 text-green-800');
  });

  it('renders with custom class', () => {
    render(<Badge label="Custom Badge" className="text-xs" />);
    const badge = screen.getByText('Custom Badge');
    expect(badge).toHaveClass('text-xs');
  });
});
