import {
  GetFilterTitleReq,
  GetMusicTitleReq,
  genre,
} from '../types/music/client';
import { get } from './client';

export const getMusicTitle = async () => {
  const { data } = await get<GetMusicTitleReq>('api/v1/stations');

  return data;
};

export const getMusicTitleWithPlaylist = async (
  filterId: number,
  genre: genre,
) => {
  const { data } = await get<GetFilterTitleReq>(
    `api/v1/musics/filter/${filterId}?genre=${genre}`,
  );

  return data;
};
