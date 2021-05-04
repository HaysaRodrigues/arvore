import renderer from 'react-test-renderer';
import App from './App';

test('should renders app', () => {
  const tree = renderer.create(<App />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});