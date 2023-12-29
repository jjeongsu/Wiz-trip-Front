
import { Link } from 'react-router-dom';
import * as S from '../styles/header.style';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import CheckLogin from '../utils/checklogin';
import Profileimg from '../assets/default_profileimg.png'
import { removeCookie } from '../utils/cookies';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../services/user';
function Header() {
  const navigate = useNavigate();

  //로그인 여부 확인
  const isLogin = CheckLogin();
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const dispatch = useDispatch();


  const handleLogout=()=>{
      //쿠키 삭제
      removeCookie('jwtToken');
      removeCookie('refreshToken');
      setIsOpenMenu(!isOpenMenu)
      dispatch(deleteUser());
      
  }
  return (
    <>
    <S.HeaderBox>
      <Link to="/">
        <h1 className="logo">Wiz-trip</h1>
      </Link>
      {isLogin? 
        <div className='user-info'>
          <span>사용자 이름</span>
          <button onClick={()=>setIsOpenMenu(!isOpenMenu)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'default' }}>
            <img src={Profileimg} alt='profile' width={50}/>
          </button>
        </div>
        :
        <button
          onClick={() => {
              navigate('/login');
          }}>로그인
        </button>
      }

    </S.HeaderBox>
    {isOpenMenu && 
      <div style={{width: '1100px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: 'auto'}}>
        <S.MenuBox>
          <Link to='/mypage' className='menu-text'>마이페이지</Link>
          <Link className='menu-text' onClick={handleLogout}>로그아웃</Link>
        </S.MenuBox>
      </div>}
    </>
  );
}

export default Header;
