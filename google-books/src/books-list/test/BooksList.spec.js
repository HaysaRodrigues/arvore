import React from 'react'
import renderer from 'react-test-renderer';
import BooksList from "../BooksList";

describe('<BooksList/>', () => {
    test('should render book list', () => {
        const tree = renderer.create(<BooksList/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
