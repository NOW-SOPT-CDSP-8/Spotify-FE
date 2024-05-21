import styled from 'styled-components';
import { IcShare, IcMenuVertical } from '../../assets/svg';
import LikeComponent from './LikeComponent';
import { post, del } from '../../apis/client';
import { useState } from 'react';

const MenuComponent = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(10);

  const toggleLike = async () => {
    try {
      if (liked) {
        const response = await del('/api/v1/1/unliked');
        console.log('좋아요 취소');
        setLikeCount((prevCount) => prevCount - 1);
      } else {
        const response = await post('/api/v1/1/liked');
        console.log('좋아요');
        setLikeCount((prevCount) => prevCount + 1);
      }
      setLiked(!liked);
    } catch (error) {
      console.error();
    }
  };

  return (
    <MenuComponentWrapper>
      <LikeComponent likeCount={likeCount} onClick={toggleLike} />
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
