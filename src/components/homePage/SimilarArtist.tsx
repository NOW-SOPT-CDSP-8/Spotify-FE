import styled from 'styled-components';
import { IcArtist2, IcArtist3, IcArtist4 } from '../../assets/svg';

const artists = [
  { id: 1, name: 'Jorjia Smith', Icon: IcArtist2 },
  { id: 2, name: 'YEJI', Icon: IcArtist3 },
  { id: 3, name: 'John Summit', Icon: IcArtist4 },
];
const SimilarArtist = () => {
  return (
    <SimilarArtistWrapper>
      <Title>비슷한 아티스트</Title>
      <ArtistListContainer>
        {artists.map((artist) => (
          <IconContainer key={artist.id}>
            <ArtistIcon as={artist.Icon} />
            <ArtistName>{artist.name}</ArtistName>
          </IconContainer>
        ))}
      </ArtistListContainer>
    </SimilarArtistWrapper>
  );
};

export default SimilarArtist;

const SimilarArtistWrapper = styled.section`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'flex-start',
      justify: 'flex-start',
    })};
  margin-top: 4.4rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.body3_semi};
  color: ${({ theme }) => theme.colors.white};
`;

const IconContainer = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: 'row' })};
  margin-top: 0.9rem;
  gap: 0.9rem;
`;

const ArtistIcon = styled.div`
  width: 4.2rem;
  height: 4.2rem;
`;

const ArtistName = styled.p`
  ${({ theme }) => theme.fonts.caption2};
  color: ${({ theme }) => theme.colors.white};
`;

const ArtistListContainer = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ align: 'start', justify: 'start' })};
  gap: 3rem;
`;
