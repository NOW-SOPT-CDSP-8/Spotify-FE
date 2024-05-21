import styled from 'styled-components';
import { IcShare, IcMenuVertical } from '../../assets/svg';
import LikeComponent from './LikeComponent';
import { post, del } from '../../apis/client';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const MenuComponent = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(8);

  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: () => post('/api/v1/1/liked'),
    onMutate: async () => {
      // 낙관적 업데이트: 서버 요청 전에 UI를 먼저 업데이트
      setLiked(true);
      setLikeCount((prevCount) => prevCount + 1);
    },
    onError: (error) => {
      // 에러 발생 시 이전 상태로 되돌리기
      setLiked(false);
      setLikeCount((prevCount) => prevCount - 1);
      console.error(error);
    },
    onSuccess: () => {
      console.log('좋아요');
    },
    onSettled: () => {
      // 성공 여부에 관계없이 쿼리 무효화
      queryClient.invalidateQueries(['likeStatus']);
    },
  });

  const unlikeMutation = useMutation({
    mutationFn: () => del('/api/v1/1/unliked'),
    onMutate: async () => {
      // 낙관적 업데이트: 서버 요청 전에 UI를 먼저 업데이트
      setLiked(false);
      setLikeCount((prevCount) => prevCount - 1);
    },
    onError: (error) => {
      // 에러 발생 시 이전 상태로 되돌리기
      setLiked(true);
      setLikeCount((prevCount) => prevCount + 1);
      console.error(error);
    },
    onSuccess: () => {
      console.log('좋아요 취소');
    },
    onSettled: () => {
      // 성공 여부에 관계없이 쿼리 무효화
      queryClient.invalidateQueries(['likeStatus']);
    },
  });

  const toggleLike = () => {
    if (liked) {
      unlikeMutation.mutate();
    } else {
      likeMutation.mutate();
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
