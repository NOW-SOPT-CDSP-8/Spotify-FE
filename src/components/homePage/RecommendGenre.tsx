import styled from 'styled-components';
import { IcHiphopCard, IcPopCard } from '../../assets/svg';
import useEasyNavigate from '../../hooks/@common/useEasyNavigate';

const RecommendGenre = () => {
  const { goPlaylist } = useEasyNavigate();
  return (
    <RecommendGenreWrapper>
      <Title>선택한 아티스트 기반 장르 추천</Title>
      <CardContainer>
        <HiphopCard onClick={goPlaylist} />
        <PopCard onClick={goPlaylist} />
      </CardContainer>
    </RecommendGenreWrapper>
  );
};

export default RecommendGenre;

const RecommendGenreWrapper = styled.section`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'start',
      justify: 'start',
    })};
  margin-top: 2.4rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.body3_semi};
  color: ${({ theme }) => theme.colors.white};
`;

const HiphopCard = styled(IcHiphopCard)`
  width: 17.2rem;
  height: 9.2rem;
`;

const PopCard = styled(IcPopCard)`
  width: 17.2rem;
  height: 9.2rem;
`;

const CardContainer = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ direction: 'row', justify: 'start' })};
  margin-top: 1.1rem;
  gap: 1.4rem;
`;
