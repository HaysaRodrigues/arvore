import React from 'react';
import axios from 'axios';
import BookCard from "../book-card/BookCard";

const URL = 'https://www.googleapis.com/books/v1/volumes?q=Query&startIndex=0&maxResults=20';
export default class BooksList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

    async componentDidMount() {
        const response = await axios.get(URL);
        const { data } = response;
        this.setState({books: data.items});
    }

    render() {
        return (
            <>
                {this.state.books.map((book, index) => (
                    <BookCard
                        key={book.id}
                        image={book.volumeInfo.imageLinks.smallThumbnail}
                        bookTitle={book.volumeInfo.title}/>
                ))}
            </>
        )
    }
}
