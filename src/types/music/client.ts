/**@정안 TODO 채현이와 얘기 후 공통 컴포넌트에 맞게 타입 수정 */
export interface ListData {
  stationId: number;
  stationTitle: string;
  description?: string;
}

//remote => 서버로 부터 받는 데이터

//client => FE에서 쓰는 데이터

export interface GetMusicTitleReq {
  status: number;
  message: string;
  data: GetMusicTitleRes[];
}

export interface GetMusicTitleRes {
  stationId: number;
  stationTitle: string;
}

export interface GetFilterTitleReq {
  status: number;
  message: string;
  data: GetFilterTitleRes;
}

export interface GetFilterTitleRes {
  playlists: getPlaylist[];
  musics: getMusic[];
}

export interface getPlaylist {
  playlistTitle: string;
  followers: number;
}

export interface getMusic {
  musicTitle: string;
  singer: string;
  musicLikings: number;
  musicReleaseDate: string;
}

export interface GetPlayListMusics {
  status: number;
  message: string;
  data: Musics[];
}

export interface Musics {
  musicId: number;
  musicTitle: string;
  singer: string;
}

export interface GetProfileData {
  status: number;
  message: string;
  data: Data;
}

export interface Data {
  memberName: string;
  isSubscribe: boolean;
  card: Card;
}

export interface Card {
  cardName: string;
  cardType: string;
  cardNumber: string;
}

export type genre = 'pop' | 'philippinepop' | 'latinpop' | string;
