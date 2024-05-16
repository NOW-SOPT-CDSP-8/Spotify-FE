import styled from 'styled-components';
import PlaylistCardList from '../@common/card/PlaylistCardList';
import { predata2 } from '../../mocks/mockData';

const HouseMusicSection = () => {
  return (
    <HouseMusicSectionWrapper>
      <Title>하우스 뮤직 파고들기</Title>
      <PlaylistCardListContainer>
        <PlaylistCardList datas={predata2} />
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
