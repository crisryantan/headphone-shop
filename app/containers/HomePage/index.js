import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 90px 60px;
  background-color: #ededed;
`;

const SubWrapper = styled.div`
  height: -webkit-fill-available;
  background-color: #ffffff;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <SubWrapper>
          <Row type="flex">
            <Col xs={{ span: 24, order: 2 }} sm={{ span: 12, order: 1 }}>
              Left
            </Col>
            <Col xs={{ span: 24, order: 1 }} sm={{ span: 12, order: 2 }}>
              Right
            </Col>
          </Row>
        </SubWrapper>
      </Wrapper>
    );
  }
}
