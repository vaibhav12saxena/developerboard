/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders correctly', () => {
    render(<Modal isOpen={false} onClose={function (): void {
      throw new Error('Function not implemented.');
    } } children={undefined}  />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});