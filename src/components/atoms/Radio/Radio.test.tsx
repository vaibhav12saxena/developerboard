/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders correctly', () => {
    render(<Radio />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});
