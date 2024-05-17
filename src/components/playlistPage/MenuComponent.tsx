import styled from 'styled-components';
import { IcShare, IcMenuVertical } from '../../assets/svg';
import LikeComponent from './LikeComponent';

const MenuComponent = () => {
  return (
    <MenuComponentWrapper>
      <LikeComponent likeCount={10} />
      <ShareIcon />
      <MenuIcon />
    </MenuComponentWrapper>
  );
};

export default MenuComponent;

const MenuComponentWrapper = styled.div`
  width: 100%;
  margin-top: -0.3rem;
  margin-right: 0.4rem;
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'center',
      justify: 'space-between',
    })};
`;

const ShareIcon = styled(IcShare)`
  width: 4.8rem;
  height: 4.8rem;
  margin-left: 0.2rem;
`;

const MenuIcon = styled(IcMenuVertical)`
  width: 4.8rem;
  height: 4.8rem;
  margin-left: 0.2rem;
`;
