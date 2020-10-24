import { lazy } from 'react';

const Login = lazy(() => import('../screens/Login'));
const Register = lazy(() => import('../screens/Register'));
const Profile = lazy(() => import('../screens/Profile'));
const ChangePassword = lazy(() => import('../screens/ChangePassword'));

const Routers = {
  user: {
    component: Register,
    isNeedAuth: false,
    path: '/',
  },
  login: {
    component: Login,
    isNeedAuth: false,
    path: '/login',
  },
  profile: {
    component: Profile,
    isNeedAuth: false,
    path: '/profile',
  },
  changepassword: {
    component: ChangePassword,
    isNeedAuth: false,
    path: '/changepassword',
  },
  
};

export default Routers;
