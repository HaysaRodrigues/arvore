import React from 'react';

import axios from 'axios';

export default class BooksList extends React.Component {

    componentDidMount() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=Query&startIndex=0&maxResults=10`)
            .then(response => {
                console.log(response.data)
            })
    }

    render() {
        return (
            <div>
               haysa
            </div>
        )
    }
}