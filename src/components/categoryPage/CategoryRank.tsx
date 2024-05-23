import styled from 'styled-components';
import PlayListItem from '../@common/PlayListItem';

interface CategoryRankProps {
  ranks: any[];
}

const CategoryRank = ({ ranks }: CategoryRankProps) => {
  return (
    <RankWrapper>
      {ranks.map((rank, index) => (
        <RankList>
          <Rank>{index + 1}</Rank>
          <PlayListItem
            key={rank.id}
            title={rank.musicTitle}
            artist={rank.singer}
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
