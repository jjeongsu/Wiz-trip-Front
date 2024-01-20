import { styled } from 'styled-components';

export const LayoutBox = styled.div`
  display: flex;
  width: ${(props) => (props.$fullWidth ? '100vw' : '1136px')};
  flex-direction: column;
  margin: auto;

  main {
    height: 100%;
  }
`;
