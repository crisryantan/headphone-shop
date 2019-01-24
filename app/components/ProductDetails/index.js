/**
 *
 * ProductDetails
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Tabs, Select } from 'antd';

import {
  Wrapper,
  AllProducts,
  StrikeThrough,
  ProductAwardLabel,
  ColorsLabel,
} from './ProductDetails.styled';

const { TabPane } = Tabs;
const { Option } = Select;

/* eslint-disable react/prefer-stateless-function */
class ProductDetails extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <AllProducts>All products</AllProducts>
        <h1 style={{ marginBottom: 0 }}>Audio-Technica ATH-MSR7</h1>
        <ProductAwardLabel>
          2017 Best Headphones of the Year Award Winner
        </ProductAwardLabel>
        <Tabs defaultActiveKey="1" style={{ marginBottom: 30 }}>
          <TabPane tab="DESCRIPTION" key="1">
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </TabPane>
          <TabPane tab="DETAILS" key="2">
            Details Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </TabPane>
        </Tabs>
        <h2 style={{ marginBottom: 40 }}>
          $51.99 <StrikeThrough>$89.99</StrikeThrough>
        </h2>
        <ColorsLabel>COLORS</ColorsLabel>
        <Select defaultActiveFirstOption style={{ width: 120 }}>
          <Option value="white">&nbsp; white</Option>
          <Option value="brown">&nbsp; Brown</Option>
        </Select>
      </Wrapper>
    );
  }
}

ProductDetails.propTypes = {};

export default ProductDetails;
