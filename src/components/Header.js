import { styled } from 'styled-components';

function Header() {
  return <HeaderCompo>Header</HeaderCompo>;
}

export default Header;

const HeaderCompo = styled.div`
  background-color: ${({ theme }) => theme.blue};
`;
