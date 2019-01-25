import React from 'react';
import { shallow } from 'enzyme';

import ProductDetails from '../index';

describe('<ProductDetails />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<ProductDetails />);
    expect(renderedComponent).toBeTruthy();
  });
});
