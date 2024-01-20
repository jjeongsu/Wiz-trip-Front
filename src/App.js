import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join';
import Plan from './pages/Plan';
import NotFound from './pages/NotFound';
import Mypage from './pages/Mypage';
import Review from './pages/Review';
import Write from './pages/Write';
import Share from './pages/Share';
import { Navigate, Outlet } from 'react-router-dom';
import CheckLogin from './utils/checklogin';
function App() {
  const [isLogin, setIsLogin] = useState(CheckLogin());
  
  useEffect(() => {
    setIsLogin(CheckLogin());
  }, [isLogin]);


  //로그인한 회원은 들어갈 수 없는 페이지
  const PublicRoute = () => {
    console.log('isLogin: ', isLogin);
    return isLogin ? <Navigate to="/" /> : <Outlet />;
  };

  //로그인한 회원만 들어갈 수 있는 페이지
  const PrivateRoute = () => {
    console.log('isLogin: ', isLogin);
    return isLogin ? <Outlet /> : <Navigate to="/" />;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route element={<PrivateRoute />}>
            <Route path="/plan/:tripId" element={<Plan />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/write/:tripId" element={<Write />} />
            <Route path="/review/:tripId" element={<Review />} />
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
            <Route path="/join" element={<Join />} />
          </Route>
          <Route path="/trips/share/:tripId" element={<Share />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
