import { useMutation, useQueryClient } from '@tanstack/react-query';
import { post, del } from '../../apis/client';
import { useState } from 'react';

const [liked, setLiked] = useState(true);
const [likeCount, setLikeCount] = useState(8);

const queryClient = useQueryClient();
const QUERY_KEY = {
  LIKE_STATUS: 'likeStatus',
};

export const useLikeMutation = useMutation({
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
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.LIKE_STATUS] });
  },
});

export const useUnlikeMutation = useMutation({
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
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.LIKE_STATUS] });
  },
});
