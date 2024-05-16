import styled from 'styled-components';
import { IcClose, IcGo, IcUnderbar } from '../../../assets/svg';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../router/route';

interface MenuProps {
  handleToggleMenu: () => void;
}

const Menu = ({ handleToggleMenu }: MenuProps) => {
  const navigate = useNavigate();
  return (
    <>
      <MenuWrapper>
        <CloseBtn onClick={handleToggleMenu} />
        <TitleContainer>
          {/* TODO 채현이가 navigate 훅 만들어 주면 추후 수정 */}
          <MainTitleGoIconContainer
            onClick={() => {
              handleToggleMenu();
              navigate(PATH.MYPAGE);
            }}
          >
            <MainTitle>계정 보기</MainTitle>
            <AccountGoIcon />
          </MainTitleGoIconContainer>
          <MainTitle>프로필</MainTitle>
          <MainTitle>로그아웃 하기</MainTitle>
        </TitleContainer>
        <UnderbarIconContainer>
          <UnderbarIcon />
        </UnderbarIconContainer>
        <SubTitleContainer>
          <SubTitle>지원</SubTitle>
          <SubTitle>다운로드하기</SubTitle>
          <SubTitle>개인정보취급방침</SubTitle>
          <SubTitle>약관</SubTitle>
        </SubTitleContainer>
      </MenuWrapper>
    </>
  );
};

export default Menu;

const MenuWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 99;
  position: fixed;
`;

const CloseBtn = styled(IcClose)`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 33.4rem;
  margin-top: 1.97rem;
`;

const TitleContainer = styled.article`
  ${({ theme }) =>
    theme.mixin.inlineFlexBox({
      direction: 'column',
      justify: 'center',
    })};
  margin-left: 3.6rem;
  margin-top: 1.9rem;
  gap: 2rem;
`;

const MainTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title4};
`;

const AccountGoIcon = styled(IcGo)`
  width: 2rem;
  height: 2rem;
`;

const MainTitleGoIconContainer = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ direction: 'row', align: 'center' })};
  gap: 0.7rem;
`;

const UnderbarIcon = styled(IcUnderbar)`
  width: 1.4rem;
`;

const UnderbarIconContainer = styled.article`
  ${({ theme }) => theme.mixin.flexBox({ direction: 'row', align: 'center' })};
  margin-top: 3.5rem;
  margin-left: 3.6rem;
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.headline2};
  color: ${({ theme }) => theme.colors.white};
`;

const SubTitleContainer = styled.article`
  ${({ theme }) =>
    theme.mixin.inlineFlexBox({
      direction: 'column',
      justify: 'center',
    })};
  margin-left: 3.6rem;
  margin-top: 3rem;
  gap: 2rem;
`;
