import React from 'react';

export  default function BookCard(props) {

    return (
        <div>
            <img
                className={'bookImage'}
                src={props.image}/>
            <p>{props.bookTitle}</p>
        </div>
    );
}