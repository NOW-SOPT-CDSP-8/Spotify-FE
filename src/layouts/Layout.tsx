import { Outlet } from 'react-router-dom';
import { useMobile } from '../utils/useMobile';

const Layout = () => {
  useMobile();
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
