import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render the page', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent).toBeTruthy();
  });

  it('should successfully changeProductColor', () => {
    const renderedComponent = shallow(<HomePage />);
    renderedComponent.instance().changeProductColor('brown');
    expect(renderedComponent.state().hpColor).toEqual('brown');
  });

  it('should successfully addToCart', () => {
    const renderedComponent = shallow(<HomePage />);
    renderedComponent.instance().addToCart();
    expect(renderedComponent.state().transactBtnText).toEqual('Loading...');
  });

  it('should successfully reset state when already finished addToCart', () => {
    const renderedComponent = shallow(<HomePage />);
    renderedComponent.setState({ transactBtnText: 'View Cart' });
    renderedComponent.instance().addToCart();
    expect(renderedComponent.state().transactBtnText).toEqual('ADD TO CART');
  });
});
