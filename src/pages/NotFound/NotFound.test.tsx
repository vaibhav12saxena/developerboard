import { render, screen } from '@testing-library/react';
import NotFound from '.';

describe('NotFound Page', () => {
  it('renders correctly', () => {
    render(<NotFound />);
    expect(screen.getByText('NotFound Page')).toBeInTheDocument();
  });
});
