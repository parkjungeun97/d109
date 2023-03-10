import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RedirectPage from './pages/RedirectPage';

// 아동페이지
import ChMainPage from './pages/child/ChMainPage';
import ChStoreDetailPage from './pages/child/ChStoreDetailPage';
import ChUserPage from './pages/child/ChUserPage';

// 사장님페이지
import OwStorePage from './pages/owner/OwStorePage';
import OwBookingPage from './pages/owner/OwBookingPage';
import OwManagePage from './pages/owner/OwManagePage';
import StoreRegisterPage from './pages/owner/StoreRegisterPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/login/oauth' element={<RedirectPage/>}/>

        {/* 아동페이지 */}
        <Route path='/chmain' element={<ChMainPage/>}/>
        <Route path='/chstore' element={<ChStoreDetailPage/>}/>
        <Route path='/chuser' element={<ChUserPage/>}/>
  
        {/* 사장님페이지 */} 
        <Route path='/owstore/:store_id' element={<OwStorePage />} />
        <Route path='/owstore/:store_id/booking' element={<OwBookingPage />} />
        <Route path='/owstorelist' element={<OwManagePage/>} /> 
        <Route path='/owregister' element={<StoreRegisterPage/>} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default Router;