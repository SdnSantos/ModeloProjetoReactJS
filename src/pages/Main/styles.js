import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'red' : 'white')};

  small {
    font-size: 16px;
  }
`;
