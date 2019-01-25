import React from 'react';
import { shallow } from 'enzyme';

import ProductImage from '../index';

describe('<ProductImage />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<ProductImage />);
    expect(renderedComponent).toBeTruthy();
  });
});
