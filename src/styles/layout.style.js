import { styled } from 'styled-components';

export const LayoutBox = styled.div`
  display: flex;
  width:  ${props => props.$fullWidth ? '100%' : '1136px'}; 
  flex-direction: column;
  margin: auto;
`;
