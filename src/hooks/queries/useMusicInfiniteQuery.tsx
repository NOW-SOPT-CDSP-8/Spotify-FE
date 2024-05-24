import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchMusics } from '../../apis/playList';
import { Musics } from '../../types/music/client';

const QUERY_KEY_MUSICS = ['musics'];

const useMusicInfiniteQuery = (cursor: number) => {
  return useInfiniteQuery({
    queryKey: QUERY_KEY_MUSICS,
    queryFn: ({ pageParam = cursor }) => fetchMusics({ pageParam }),
    getNextPageParam: (lastPage: { nextPage: number | undefined }) =>
      lastPage.nextPage,
    initialPageParam: 0,
  });
};

export default useMusicInfiniteQuery;
