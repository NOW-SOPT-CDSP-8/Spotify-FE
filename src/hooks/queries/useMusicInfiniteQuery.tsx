import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchMusics } from '../../apis/playList';

const useMusicInfiniteQuery = (cursor) => {
  return useInfiniteQuery({
    queryKey: ['musics'],
    queryFn: ({ pageParam = cursor }) => fetchMusics({ pageParam }),
    getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
    initialPageParam: 0,
  });
};

export default useMusicInfiniteQuery;
