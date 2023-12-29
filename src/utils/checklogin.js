import { getCookie } from './cookies';

const CheckLogin = () => {
    //쿠키를 이용해 로그인 여부 판단 
    if(getCookie('jwtToken') && getCookie('jwtToken') !== "undefined"){
      return true;
    }else{
      return false;
    }
   
    
}

export default CheckLogin