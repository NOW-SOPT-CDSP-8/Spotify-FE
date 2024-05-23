import styled from 'styled-components';
import { AppOpenBtn } from '../button/AppOpenBtn';
import { HeaderRoot } from './HeaderWrapper';
import Menu from '../menu/Menu';
import useMenuOpen from '../../../hooks/menu/useMenuOpen';
import useEasyNavigate from '../../../hooks/@common/useEasyNavigate';

const Header = () => {
  const { visible, handleToggleMenu } = useMenuOpen();
  const { goHome } = useEasyNavigate();
  const isPlaylistPage = window.location.pathname === '/playlist';
  return (
    <>
      <HeaderRoot isPlaylistPage={isPlaylistPage}>
        <HeaderRoot.Logo onClick={goHome} />
        <HeaderMenuContainer>
          <IconButtonContainer>
            <HeaderRoot.Icon />
            <AppOpenBtn>
              <AppOpenBtn.Text>앱 열기</AppOpenBtn.Text>
            </AppOpenBtn>
          </IconButtonContainer>
          <HeaderRoot.Menu onClick={handleToggleMenu} />
        </HeaderMenuContainer>
      </HeaderRoot>
      {visible && <Menu handleToggleMenu={handleToggleMenu} />}
    </>
  );
};

export default Header;

const HeaderMenuContainer = styled.article`
  ${({ theme }) => theme.mixin.flexCenter({ direction: 'row' })};
`;

const IconButtonContainer = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: 'row' })};
  gap: 1.5rem;
`;
