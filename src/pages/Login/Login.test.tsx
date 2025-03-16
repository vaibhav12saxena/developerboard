
import { render, screen } from '@testing-library/react';
import Login from '.';

describe('Login Page', () => {
    it('renders correctly', () => {
        render(<Login />);
        expect(screen.getByText('Login Page')).toBeInTheDocument();
    });
});
