import styled from 'styled-components';
import { IcLogo2, IcMenu2, IcProfile } from '../../../assets/svg';

const MypageHeader = () => {
  return (
    <MypageHeaderWrapper>
      <Logo2 />
      <IconContainer>
        <ProfileIcon />
        <Menu2 />
      </IconContainer>
    </MypageHeaderWrapper>
  );
};

export default MypageHeader;

const MypageHeaderWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'center',
      justify: 'space-between',
    })};
  margin-top: 0.8rem;
  margin-left: 1.5rem;
`;

const ProfileIcon = styled(IcProfile)`
  width: 3.3rem;
  height: 3.3rem;
`;

const Logo2 = styled(IcLogo2)`
  width: 8.8rem;
  height: 2.6rem;
`;

const Menu2 = styled(IcMenu2)`
  width: 3.3rem;
  height: 3.3rem;
`;

const IconContainer = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ direction: 'row', align: 'center' })};
  gap: 0.9rem;
  margin-right: 0.8rem;
`;
