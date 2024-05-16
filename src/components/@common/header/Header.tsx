import styled from 'styled-components';
import { AppOpenBtn } from '../button/AppOpenBtn';
import { HeaderRoot } from './HeaderWrapper';

const Header = () => {
  return (
    <>
      <HeaderRoot>
        <HeaderRoot.Logo />
        <HeaderMenuContainer>
          <IconButtonContainer>
            <HeaderRoot.Icon />
            <AppOpenBtn>
              <AppOpenBtn.Text>앱 열기</AppOpenBtn.Text>
            </AppOpenBtn>
          </IconButtonContainer>
          <HeaderRoot.Menu />
        </HeaderMenuContainer>
      </HeaderRoot>
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
