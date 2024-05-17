import styled from 'styled-components';
import PlayListItem from '../@common/PlayListItem';

const CategoryRank = () => {
  const ranks = [
    {
      id: 1,
      title: "I Don't Think That I Like Her",
      artist: 'Charlie Puth',
    },
    {
      id: 2,
      title: 'Steal The Show',
      artist: 'Lauv',
    },
    {
      id: 3,
      title: 'Dangerously',
      artist: 'Charlie Puth',
    },
    {
      id: 4,
      title: 'Stay',
      artist: 'The Kid LAROI, Justin Bieber',
    },
    {
      id: 5,
      title: 'Beautiful Things',
      artist: 'Benson Boone',
    },
  ];

  return (
    <RankWrapper>
      {ranks.map((rank, index) => (
        <RankList>
          <Rank>{index + 1}</Rank>
          <PlayListItem
            key={rank.id}
            title={rank.title}
            artist={rank.artist}
            onClick={() => {}}
          />
        </RankList>
      ))}
    </RankWrapper>
  );
};

export default CategoryRank;

const RankWrapper = styled.section`
  margin: 2.3rem 0;
  padding-bottom: 2.7rem;
`;

const RankList = styled.article`
  ${({ theme }) =>
    theme.mixin.flexBox({
      align: 'center',
      justify: 'space-around',
    })};
  gap: 1rem;
  margin: 1.5rem;
`;
const Rank = styled.p`
  ${({ theme }) => theme.fonts.detail1};
  color: ${({ theme }) => theme.colors.gray200};
`;
