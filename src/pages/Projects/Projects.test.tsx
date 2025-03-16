
import { render, screen } from '@testing-library/react';
import Projects from '.';

describe('Projects Page', () => {
    it('renders correctly', () => {
        render(<Projects />);
        expect(screen.getByText('Projects Page')).toBeInTheDocument();
    });
});
