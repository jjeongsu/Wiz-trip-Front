import React from 'react'
import * as K from '../../styles/kakaologin.style'
import KakaoIcon from '../../assets/kakao-icon'
function Kakaologin() {
  return (
    <K.ButtonContainer>
        <KakaoIcon width={22}  height={22} fill={'white'}/>
        <span className='button-text'>카카오계정으로 로그인</span>
    </K.ButtonContainer>
  )
}

export default Kakaologin