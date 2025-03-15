/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('renders correctly', () => {
    render(<TextArea text="Test text" />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});