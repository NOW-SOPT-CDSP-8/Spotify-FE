import styled from 'styled-components';
import PlaylistCardList from '../@common/card/PlaylistCardList';
import { useGetMusicTitle } from '../../hooks/queries/music';

const HouseMusicSection = () => {
  const { data } = useGetMusicTitle();

  return (
    <HouseMusicSectionWrapper>
      <Title>하우스 뮤직 파고들기</Title>
      <PlaylistCardListContainer>
        <PlaylistCardList datas={data?.data} />
      </PlaylistCardListContainer>
    </HouseMusicSectionWrapper>
  );
};

export default HouseMusicSection;

const HouseMusicSectionWrapper = styled.section`
  ${({ theme }) => theme.mixin.flexBox({ direction: 'column' })};
  margin-top: 3.3rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.body3_semi};
  color: ${({ theme }) => theme.colors.white};
`;

const PlaylistCardListContainer = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ align: 'start', justify: 'start' })};
  width: 90%;
  margin-top: 1.2rem;
  overflow-x: scroll;
  overflow-y: hidden;
`;
