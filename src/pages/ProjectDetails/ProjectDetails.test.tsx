
import { render, screen } from '@testing-library/react';
import ProjectDetails from '.';

describe('ProjectDetails Page', () => {
    it('renders correctly', () => {
        render(<ProjectDetails />);
        expect(screen.getByText('ProjectDetails Page')).toBeInTheDocument();
    });
});
