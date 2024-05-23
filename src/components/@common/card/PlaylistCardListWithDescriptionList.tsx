import { predata } from '../../../mocks/mockData';
import { GetFilterTitleRes, GetRecentData } from '../../../types/music/client';
import PlaylistCard from './PlaylistCard';
import styled from 'styled-components';

interface PlaylistCardListWithDescriptionListProps {
  data: GetFilterTitleRes & GetRecentData[];
  onClick?: () => void;
  playlist?: boolean;
  recent?: boolean;
}

const PlaylistCardListWithDescriptionList = ({
  data,
  onClick,
  playlist,
  recent,
}: PlaylistCardListWithDescriptionListProps) => {
  return (
    <PlaylistCardWrapper>
      {playlist &&
        data.playlists.map((playlist, index) => (
          <PlaylistCard
            key={`playlist-${index}`}
            hasDescription={!!playlist.followers}
            onClick={onClick}
          >
            <PlaylistCard.Img src={predata[index % predata.length].imgUrl} />
            <PlaylistCard.Title>{playlist.playlistTitle}</PlaylistCard.Title>
            <PlaylistCard.Description>
              {`팔로워 ${playlist.followers.toLocaleString()}명`}
            </PlaylistCard.Description>
          </PlaylistCard>
        ))}
      {recent &&
        data.map((recentdata, index) => (
          <PlaylistCard
            key={`playlist-${index}`}
            hasDescription={!!recentdata.description}
            onClick={onClick}
          >
            <PlaylistCard.Img src={recentdata.imgUrl} />
            <PlaylistCard.Title>{recentdata.title}</PlaylistCard.Title>
            <PlaylistCard.Description>
              {recentdata.description}
            </PlaylistCard.Description>
          </PlaylistCard>
        ))}
    </PlaylistCardWrapper>
  );
};

export default PlaylistCardListWithDescriptionList;

const PlaylistCardWrapper = styled.section`
  ${({ theme }) => theme.mixin.flexBox({ align: 'start', justify: 'start' })};
  gap: 1.5rem;
`;
