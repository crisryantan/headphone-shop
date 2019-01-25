import styled from 'styled-components';
export const Wrapper = styled.div`
  height: 100vh;
  padding: 60px 70px;
  background-color: #ededed;

  @media (max-width: 992px) {
    height: 120vh;
  }

  @media (max-width: 768px) {
    height: 200vh;
  }
`;

export const SubWrapper = styled.div`
  background-color: #ffffff;
`;

export const AddToCartWrapper = styled.div`
  padding: 20px 40px;
  border-top: 1px solid #ededed;
`;
