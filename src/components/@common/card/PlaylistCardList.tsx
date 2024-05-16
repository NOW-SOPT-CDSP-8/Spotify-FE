import PlaylistCard from './PlaylistCard';
import styled from 'styled-components';

type listData = {
  imgUrl: string;
  title: string;
  description?: string;
};

interface PlaylistCardListProps {
  datas: listData[];
}

const PlaylistCardList = ({ datas }: PlaylistCardListProps) => {
  return (
    <PlaylistCardWrapper>
      {datas.map((data) => (
        <PlaylistCard hasDescription={data.description ? true : false}>
          <PlaylistCard.Img src={data.imgUrl} />
          <PlaylistCard.Title>{data.title}</PlaylistCard.Title>
          {data.description && (
            <PlaylistCard.Description>
              {data.description}
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
