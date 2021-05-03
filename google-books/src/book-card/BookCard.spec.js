import React from 'react'
import { render, screen } from '@testing-library/react';
import BookCard from "./BookCard";

describe('<BookCard/>', () => {
    test('should render book card with book title', () => {
        render(<BookCard bookTitle={'titulo do livro'}/>);
        const bookTitle = screen.getByText(/titulo do livro/);
        expect(bookTitle).toBeInTheDocument();
    });

    test('should render book card with book image', () => {
        render(<BookCard />);
        const bookImage = screen.getByRole("img");
        expect(bookImage).toBeInTheDocument();
    });
})

