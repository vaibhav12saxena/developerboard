
import { render, screen } from '@testing-library/react';
import Dashboard from '.';

describe('Dashboard Page', () => {
    it('renders correctly', () => {
        render(<Dashboard />);
        expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
    });
});
