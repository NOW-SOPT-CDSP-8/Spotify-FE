import { Outlet } from 'react-router-dom';
import { useMobile } from '../utils/useMobile';
import Header from '../components/@common/header/Header';

const Layout = () => {
  useMobile();
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
