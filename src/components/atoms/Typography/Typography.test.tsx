/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

describe('Typography', () => {
  it('renders correctly', () => {
    render(<Typography variant="headingXL" children={undefined} />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});
