import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 40px;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const ImageDiv = styled.div`
  max-width: 100%;
  height: 600px;
  background: ${props => `url(${props.src}) no-repeat center;`};
  background-size: contain;

  @media (max-width: 768px) {
    height: 400px;
  }
`;
