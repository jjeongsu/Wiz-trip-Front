import PropTypes from 'prop-types';
import Header from './Header';
import * as S from '../styles/layout.style';
function Layout({ children }) {
  return (
    <S.LayoutBox>
      <Header />
      <main>{children}</main>
    </S.LayoutBox>
  );
}
Layout.propsTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
