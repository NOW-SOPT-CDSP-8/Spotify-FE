import styled from 'styled-components';
import PlaylistCardList from '../@common/card/PlaylistCardList';
import { predata2 } from '../../mocks/mockData';

interface RecommendStationProps {}

const RecommendStation = ({}: RecommendStationProps) => {
  return (
    <RecommendStationWrapper>
      <TitleContainer>
        <HeadLine>추천 스테이션</HeadLine>
        {/* 정안TODO 멤버ID가 1인 사람의 이름을 GET해와서 '선정님' 대신에 집어넣어줘야하나? */}
        <Caption>선정님 좋아하는 곡과 비슷한 곡을 큐레이팅 했어요</Caption>
      </TitleContainer>
      {/* 정안TODO predata대신 서버에서 GET해오기 */}
      <PlaylistCardListContainer>
        <PlaylistCardList datas={predata2} />
      </PlaylistCardListContainer>
    </RecommendStationWrapper>
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
