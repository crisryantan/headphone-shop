import styled from 'styled-components';

export const Wrapper = styled.div`
  border-right: 1px solid #ededed;
  padding: 20px 40px;

  .ant-tabs-nav .ant-tabs-tab-active {
    color: #000000;
  }

  .ant-tabs-tab {
    color: #ececec;
  }
`;

export const AllProducts = styled.div`
  margin-bottom: 20px;
`;

export const StrikeThrough = styled.span`
  text-decoration: line-through;
  color: #ececec;
`;

export const ProductAwardLabel = styled.div`
  color: #d4d4d4;
  font-weight: 400;
  margin-bottom: 30px;
`;

export const ColorsLabel = styled.div`
  font-weight: 600;
  font-size: 10px;
  margin-bottom: 5px;
`;
