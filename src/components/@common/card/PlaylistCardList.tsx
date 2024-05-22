import { predata } from '../../../mocks/mockData';
import { ListData } from '../../../types/music/client';
import PlaylistCard from './PlaylistCard';
import styled from 'styled-components';

interface PlaylistCardListProps {
  datas?: ListData[];
  onClick?: () => void;
}

const PlaylistCardList = ({ datas = [], onClick }: PlaylistCardListProps) => {
  return (
    <PlaylistCardWrapper>
      {datas.map((data) => (
        <PlaylistCard
          key={data.stationId}
          hasDescription={data.description ? true : false}
          onClick={onClick}
        >
          <PlaylistCard.Img src={predata[0].imgUrl} />
          <PlaylistCard.Title>{data.stationTitle}</PlaylistCard.Title>
          {data.description && (
            <PlaylistCard.Description>
              {data.stationTitle}
            </PlaylistCard.Description>
          )}
        </PlaylistCard>
      ))}
    </PlaylistCardWrapper>
  );
};

export default PlaylistCardList;

const PlaylistCardWrapper = styled.section`
  ${({ theme }) => theme.mixin.flexBox({ align: 'start', justify: 'start' })};
  gap: 1.5rem;
`;
