import { Route, Routes } from 'react-router-dom';
import Catalog from '../pages/skillUp/Catalog/Catalog'; 
import ViderPlayer from '../pages/skillUp/ViderPlayer/ViderPlayer';
import SignIn from '../pages/_common/Auth/SignIn';
import Home from '../pages/skillUp/Home/Home';
import Profile from '../pages/skillUp/Profile/Profile';
import paths from './AppRoute.model';

export function Router() {
    return (
      <Routes>
        <Route path={paths.root} element={<SignIn />} />
        
        <Route path={paths.home.root} element={<Home />}>
          <Route path={paths.home.root} element={<Catalog />} />
          <Route path={paths.home.profile.root} element={<Profile />} />
          <Route path={paths.home.videoPlayer.root} element={<ViderPlayer />} />
        </Route>

      </Routes>
    )
  }
