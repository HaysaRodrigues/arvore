import React from 'react';
import BookCard from "../book-card/BookCard";

export default class BooksList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            image: ''
        }
    }


    componentDidMount() {
       this.getBookInformation();
    }

    getBookInformation() {
        fetch('https://www.googleapis.com/books/v1/volumes?q=Query&startIndex=0&maxResults=10')
            .then(response => response.json())
            .then(data => this.setState({image: data.items[0].volumeInfo.imageLinks.smallThumbnail}))
    }

    render() {
        return (
            <>
                <BookCard image={this.state.image}/>
            </>
        )
    }
}
