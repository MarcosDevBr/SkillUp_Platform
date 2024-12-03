import Home from '../pages/skillUp/Home/Home';
import Profile from '../pages/skillUp/Profile/Profile';
import ViderPlayer from '../pages/skillUp/ViderPlayer/ViderPlayer';
import { createBrowserRouter } from 'react-router-dom';
import { SkillUpScreen } from './AppRoute.model';
import SignIn from '../pages/_common/Auth/SignIn';

export const router = createBrowserRouter([
    { path: '/', element: <SignIn /> },
    { path: SkillUpScreen.home ,element: <Home /> },
    { path: SkillUpScreen.profile ,element: <Profile /> },
    { path: SkillUpScreen.videoPlayer ,element: <ViderPlayer /> },
])