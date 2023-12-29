import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join';
import Plan from './pages/Plan';
import Plantest from './pages/Plantest';
import NotFound from './pages/NotFound';
import Mypage from './pages/Mypage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/plan/:tripId" element={<Plan />} />
          <Route path="/plantest" element={<Plan />} />
          <Route path="/mypage" element={<Mypage/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
