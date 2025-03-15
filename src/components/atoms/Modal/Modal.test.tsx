/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders correctly', () => {
    render(<Modal text="Test text" />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});