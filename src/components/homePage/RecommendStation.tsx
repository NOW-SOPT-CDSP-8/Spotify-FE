import styled from 'styled-components';
import PlaylistCardList from '../@common/card/PlaylistCardList';
import { useGetMusicTitle } from '../../hooks/queries/music';
import useEasyNavigate from '../../hooks/@common/useEasyNavigate';
import { Suspense } from 'react';
import Loading from '../@common/loading/Loading';

const RecommendStation = () => {
  const { data, isLoading } = useGetMusicTitle();
  const { goPlaylist } = useEasyNavigate();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <RecommendStationWrapper>
        <TitleContainer>
          <HeadLine>추천 스테이션</HeadLine>
          <Caption>선정님 좋아하는 곡과 비슷한 곡을 큐레이팅 했어요</Caption>
        </TitleContainer>
        {/* 정안TODO predata대신 서버에서 GET해오기 */}
        <PlaylistCardListContainer>
          <PlaylistCardList datas={data?.data} onClick={goPlaylist} />
        </PlaylistCardListContainer>
      </RecommendStationWrapper>
    </Suspense>
  );
};

export default RecommendStation;

const RecommendStationWrapper = styled.article`
  ${({ theme }) =>
    theme.mixin.inlineFlexBox({
      direction: 'column',
      align: 'flex-start',
      justify: 'flex-start',
    })};
  width: 100%;
  gap: 2rem;
`;

const HeadLine = styled.h1`
  ${({ theme }) => theme.fonts.headline1};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 2.9rem;
`;

const Caption = styled.p`
  ${({ theme }) => theme.fonts.caption1};
  color: ${({ theme }) => theme.colors.white};
`;

const TitleContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'column', align: 'flex-start' })};
  gap: 0.4rem;
`;

const PlaylistCardListContainer = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ align: 'start', justify: 'start' })};
  width: 90%;
  overflow-x: scroll;
  overflow-y: hidden;
`;
