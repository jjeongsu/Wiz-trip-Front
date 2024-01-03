import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join';
import Plan from './pages/Plan';
import Plantest from './pages/Plantest';
import NotFound from './pages/NotFound';
import Mypage from './pages/Mypage';

import { Navigate, Outlet } from 'react-router-dom';
import CheckLogin from './utils/checklogin';
function App() {
    const isLogin = CheckLogin();
    console.log(isLogin);

    //로그인한 회원은 들어갈 수 없는 페이지 
    const PublicRoute = () => {
      console.log("isLogin: ", isLogin);
      return isLogin ? <Navigate to="/"/> : <Outlet />;

    }
    
    //로그인한 회원만 들어갈 수 있는 페이지 
    const PrivateRoute = () => {
        console.log("isLogin: ", isLogin);
        return isLogin ? <Outlet /> :  <Navigate to="/"/>
    }
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route element={<PrivateRoute />}>
              <Route path="/plan/:tripId" element={<Plan />} />
              <Route path="/mypage" element={<Mypage/>}/>
            </Route>

            <Route element={<PublicRoute/>}>
              <Route path="/login" element={<Login />} />
              <Route path="/join" element={<Join />} />
            </Route>

            <Route path="/plantest" element={<Plan />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
