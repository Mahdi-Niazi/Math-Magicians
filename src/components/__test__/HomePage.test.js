import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Calculator from '../Calculator';

describe('Calculator Page', () => {
  it('Should', () => {
    render(<Calculator />);
    const h1 = screen.getByTestId('h2Id');
    expect(h1.innerHTML).toBe("Let's do some maths");
  });

  it('Render the Calculator Page user interaction', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
