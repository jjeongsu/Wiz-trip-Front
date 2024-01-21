import { Link } from 'react-router-dom';
import * as S from '../styles/header.style';
import LogoWhite from '../assets/header-logo-white-min.png';
import LogoBlack from '../assets/header-logo-black-min.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CheckLogin from '../utils/checklogin';
import Profileimg from '../assets/default_profileimg.png';
import { removeCookie } from '../utils/cookies';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../services/user';
import { getUser } from '../apis/api/user';
import { useQuery } from 'react-query';

function Header() {
  const navigate = useNavigate();

  //로그인 여부 확인
  const isLogin = CheckLogin();
  const user = useSelector((state) => state.User);
  const {
    isLoading: isLoadingUser,
    isSuccess: isSuccessUser,
    data: userData
  } = useQuery('getUserInfo', () => getUser(user.userIdx));
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dispatch = useDispatch();


  const handleLogout = () => {
    //쿠키 삭제
    removeCookie('jwtToken');
    removeCookie('refreshToken');
    removeCookie('tripId');
    setIsOpenMenu(!isOpenMenu);
    dispatch(deleteUser());

    // 페이지를 새로고침
    window.location.reload();

  }

  return (
    <div style={{ background: '#FFF' }}>
      <S.HeaderBox>
        <Link to="/">
          <S.FlipBox>
            <div className="flip-item">
              <img src={LogoBlack} alt="logo" className="logo black" />
              <img src={LogoWhite} alt="logo" className="logo white" />
            </div>
          </S.FlipBox>
        </Link>
        {isLogin && userData ?
          <div className='user-info'>
            <span>{userData.nickname}</span>
            <button onClick={() => setIsOpenMenu(!isOpenMenu)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'default' }}>
              <img src={userData.image ? `data:image/webp;base64,${userData.image.content}` : Profileimg} alt='profile' style={{ borderRadius: '50%', width: '50px', height: '50px', border: '2px solid #E8EBED' }} />
            </button>
          </div>
          :
          <button
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
          </button>
        }
      </S.HeaderBox>
   
      {isOpenMenu && (
        <div
          style={{
            width: '1100px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: 'auto',
          }}
        >
          <S.MenuBox>
            <Link to="/mypage" className="menu-text">
              마이페이지
            </Link>
            <Link className="menu-text" onClick={handleLogout}>
              로그아웃
            </Link>
          </S.MenuBox>
        </div>
      )}

    </div>
  );
}



export default Header;