import React from 'react';
import axios from 'axios';
import BookCard from "../book-card/BookCard";

export default class BooksList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bookInfo: {
                title: '',
                imageLinks: {
                    smallThumbnail: ''
                }
            },

        }
    }


    async componentDidMount() {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=Query&startIndex=0&maxResults=5');
        const { data } = response;
        this.setState({bookInfo: data.items[1].volumeInfo});
    }


    render() {

        const title = this.state.bookInfo.title;
        const image = this.state.bookInfo.imageLinks.smallThumbnail;

        return (
            <>
                <BookCard
                    image={image}
                    bookTitle={title}
                />
            </>
        )
    }
}
