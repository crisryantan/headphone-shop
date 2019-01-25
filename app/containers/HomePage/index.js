import React from 'react';
import { Button, Row, Col, notification } from 'antd';

import ProductDetails from 'components/ProductDetails';
import ProductImage from 'components/ProductImage';

import { Wrapper, SubWrapper, AddToCartWrapper } from './HomePage.styled';

const initialState = {
  hpColor: 'black',
  transactBtnText: 'ADD TO CART',
  loading: false,
};

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  state = {
    ...initialState,
  };

  changeProductColor = hpColor => {
    this.setState({
      hpColor,
    });
  };

  addToCart = () => {
    const { transactBtnText } = this.state;
    if (transactBtnText === 'View Cart') {
      this.setState({
        ...initialState,
      });
      return;
    }
    this.setState(
      {
        loading: true,
        transactBtnText: 'Loading...',
      },
      () => {
        setTimeout(() => {
          notification.success({
            message: 'Item added to cart!',
          });
          this.setState({
            loading: false,
            transactBtnText: 'View Cart',
          });
        }, 2000);
      },
    );
  };

  render() {
    const { hpColor, transactBtnText, loading } = this.state;

    return (
      <Wrapper>
        <SubWrapper>
          <Row type="flex">
            <Col
              xs={{ span: 24, order: 2 }}
              sm={{ span: 24, order: 2 }}
              md={{ span: 12, order: 1 }}
            >
              <ProductDetails
                hpColor={hpColor}
                changeProductColor={this.changeProductColor}
              />
              <AddToCartWrapper>
                <Button
                  type="primary"
                  size="large"
                  loading={loading}
                  onClick={this.addToCart}
                  style={{ backgroundColor: '#3F87F5' }}
                >
                  {transactBtnText}
                </Button>
              </AddToCartWrapper>
            </Col>
            <Col
              style={{
                borderLeft: '1px solid #ededed',
              }}
              xs={{ span: 24, order: 1 }}
              sm={{ span: 24, order: 1 }}
              md={{ span: 12, order: 2 }}
            >
              <ProductImage hpColor={hpColor} />
            </Col>
          </Row>
        </SubWrapper>
      </Wrapper>
    );
  }
}
