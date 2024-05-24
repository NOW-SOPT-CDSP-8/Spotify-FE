import styled from 'styled-components';
import { IcShare, IcMenuVertical } from '../../assets/svg';
import LikeComponent from './LikeComponent';
import { post, del } from '../../apis/client';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

const MenuComponent = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(8);

  const queryClient = useQueryClient();
  const QUERY_KEY = {
    LIKE_STATUS: 'likeStatus',
  };

  const useLikeMutation = useMutation({
    mutationFn: () => post('/api/v1/1/liked'),
    onMutate: async () => {
      // 낙관적 업데이트: 서버 요청 전에 UI를 먼저 업데이트
      setLiked(true);
      setLikeCount((prevCount) => prevCount + 1);
    },
    onError: (error) => {
      setLiked(false);
      setLikeCount((prevCount) => prevCount - 1);
      if (
        isAxiosError(error) &&
        error.response?.data?.message.includes(
          '해당하는 회원이 이미 좋아요를 한 스테이션입니다.',
        )
      ) {
        useUnlikeMutation.mutate();
      }
    },
    onSuccess: () => {
      console.log('좋아요');
    },
    onSettled: () => {
      // 성공 여부에 관계없이 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.LIKE_STATUS] });
    },
  });

  const useUnlikeMutation = useMutation({
    mutationFn: () => del('/api/v1/1/unliked'),
    onMutate: async () => {
      // 낙관적 업데이트: 서버 요청 전에 UI를 먼저 업데이트
      setLiked(false);
      setLikeCount((prevCount) => prevCount - 1);
    },
    onError: (error) => {
      setLiked(true);
      setLikeCount((prevCount) => prevCount + 1);
      if (
        isAxiosError(error) &&
        error.response?.data?.message.includes(
          '멤버와 스테이션에 해당하는 좋아요가 존재하지 않습니다.',
        )
      ) {
        useLikeMutation.mutate();
      }
    },
    onSuccess: () => {
      console.log('좋아요 취소');
    },
    onSettled: () => {
      // 성공 여부에 관계없이 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.LIKE_STATUS] });
    },
  });

  const toggleLike = () => {
    if (liked) {
      useUnlikeMutation.mutate();
    } else {
      useLikeMutation.mutate();
    }
  };

  console.log('현재 좋아요 상태: ', liked);

  return (
    <MenuComponentWrapper>
      <LikeComponent likeCount={likeCount} onClick={toggleLike} liked={liked} />
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
