import { useQuery } from '@tanstack/react-query';
import { getMusicTitle } from '../../apis/music';

const QUERY_KEY = {
  GET_MUSIC_TITLE: ['musicTitle'],
};

export const useGetMusicTitle = () => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEY.GET_MUSIC_TITLE,
    //쿼리키가 바뀌면 무조건 재요청, 동적으로 쿼리키를 해야할 때가 있음. 함수인자로 받자.
    queryFn: getMusicTitle,
  });
  return { data, isLoading };
};
