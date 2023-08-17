import renderer from 'react-test-renderer';
import Quotes from '../Quotes';
​
it('Snapshot of the Quote page', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});