/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { Toast } from './Toast';

describe('Toast', () => {
  it('renders correctly', () => {
    render(<Toast text="Test text" />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});