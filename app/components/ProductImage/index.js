/**
 *
 * ProductImage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import brown from '../../images/ath-msr7-brown.jpg';
import black from '../../images/ath-msr7-black.jpg';

import { Wrapper, ImageDiv } from './ProductImage.styled';

const productChoices = {
  brown,
  black,
};

/* eslint-disable react/prefer-stateless-function */
class ProductImage extends React.PureComponent {
  render() {
    const { hpColor } = this.props;
    return (
      <Wrapper>
        <ImageDiv src={productChoices[hpColor]} />
      </Wrapper>
    );
  }
}

ProductImage.propTypes = {
  hpColor: PropTypes.string,
};

export default ProductImage;
