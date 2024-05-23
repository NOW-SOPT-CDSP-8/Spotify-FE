import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchMusics } from '../../apis/playList';

const QUERY_KEY_MUSICS = ['musics'];

const useMusicInfiniteQuery = (cursor) => {
  return useInfiniteQuery({
    queryKey: QUERY_KEY_MUSICS,
    queryFn: ({ pageParam = cursor }) => fetchMusics({ pageParam }),
    getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
    initialPageParam: 0,
  });
};

export default useMusicInfiniteQuery;
