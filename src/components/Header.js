import { Link } from 'react-router-dom';
import * as S from '../styles/header.style';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  //로그인 여부 확인하는 코드 추가하기

  return (
    <S.HeaderBox>
      <Link to="/">
        <h1 className="logo">Wiz-trip</h1>
      </Link>
      <button
        onClick={() => {
          navigate('/login');
        }}
      >
        로그인
      </button>
    </S.HeaderBox>
  );
}

export default Header;
