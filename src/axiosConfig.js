//토큰 인증 관련 axios interceptor 설정
import axios from 'axios'
import { setCookie, getCookie } from './utils/cookies';

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    console.log('request 인터셉터 작동')
   const jwtToken = getCookie('jwtToken');
   if(jwtToken){
      config.headers.Authorization = `Bearer ${jwtToken}`;
   }
    return config;
  },
  (err) => {
      /**
    request 요청을 보낼때 error가 발생하는 경우 여기서 catch가 가능
    */
    return Promise.reject(err);
  }
);

// API 요청을 보낼 때마다 호출되는 인터셉터를 설정
api.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;
      if (error.response.data.message === "JWT Token Expired" && !originalRequest._retry) {
        // JWT 토큰이 만료되었다는 응답을 받으면, 토큰 새로고침을 시도
        originalRequest._retry = true;
        const refreshToken = getCookie('refreshToken');
        if (refreshToken) {
          originalRequest.headers['Refresh'] = `Bearer ${refreshToken}`;
  
          try {
            // 새 토큰으로 원래 요청을 다시 시도
            const res = await axios(originalRequest);
            const newJwtToken = res.headers['Authorization'];
            const newRefreshToken = res.headers['Refresh'];
  
            // 갱신된 JWT 토큰과 리프레시 토큰을 저장
            setCookie('jwtToken', newJwtToken);
            setCookie('refreshToken', newRefreshToken);
  
            return res;
          } catch (error) {
            return Promise.reject(error);
          }
        } else {
          alert('로그인 먼저 진행해주세요.')
          window.location.href = '/login'
        }
      }
      return Promise.reject(error);
    }
  );

  export default api;