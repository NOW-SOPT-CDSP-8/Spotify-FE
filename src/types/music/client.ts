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
