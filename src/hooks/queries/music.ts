import { useQuery } from '@tanstack/react-query';
import { getMusicTitle, getMusicTitleWithPlaylist } from '../../apis/music';
import { genre } from '../../types/music/client';

const QUERY_KEY = {
  GET_MUSIC_TITLE: ['musicTitle'],
  GET_PLAYLIST: ['playlist'],
};

export const useGetMusicTitle = () => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEY.GET_MUSIC_TITLE,
    queryFn: getMusicTitle,
  });
  return { data, isLoading };
};

export const useGetMusicTitleWithPlaylist = (
  filterId: number,
  genre: genre,
) => {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEY.GET_PLAYLIST,
    queryFn: () => getMusicTitleWithPlaylist(filterId, genre),
  });

  return { data, isLoading };
};
