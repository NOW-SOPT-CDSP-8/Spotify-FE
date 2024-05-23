import { Outlet } from 'react-router-dom';
import { useMobile } from '../utils/useMobile';
import styled from 'styled-components';

const Layout = () => {
  useMobile();
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray900};
`;
