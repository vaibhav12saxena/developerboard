/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import { Textarea } from './TextArea';

describe('TextArea', () => {
  it('renders correctly', () => {
    render(<Textarea />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });
});
