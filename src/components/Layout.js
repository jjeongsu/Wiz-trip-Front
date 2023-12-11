import PropTypes from 'prop-types';
import Header from './Header';
import * as S from '../styles/layout.style';
function Layout({ children, fullWidth }) {
  return (
    <S.LayoutBox $fullWidth={fullWidth}>
      <Header />
      <main>{children}</main>
    </S.LayoutBox>
  );
}
Layout.propsTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,  // fullWidth prop에 대한 PropTypes 설정
};

export default Layout;
