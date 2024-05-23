import { GetPlayListMusics } from '../types/music/client';
import { get } from './client';

export const fetchMusics = async ({ pageParam = -1 }) => {
  const response = await get<GetPlayListMusics>('api/v1/1/musics', {
    params: {
      cursor: pageParam,
    },
  });

  if (!response.data.data || response.data.data.length === 0) {
    console.log('음악이 없음');
  }

  return {
    items: response.data.data,
    nextPage: response.data.data.length
      ? response.data.data.slice(-1)[0].musicId
      : undefined,
  };
};
