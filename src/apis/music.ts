import { GetMusicTitleReq } from '../types/music/client';
import { get } from './client';

export const getMusicTitle = async () => {
  const { data } = await get<GetMusicTitleReq>('api/v1/stations');

  return data;
};
