import { render, screen } from '@testing-library/react';
import Search from "./Search";

test('renders search', () => {
    render(<Search />);
    const element = screen.getByText('search');
    expect(element).toBeInTheDocument();
});