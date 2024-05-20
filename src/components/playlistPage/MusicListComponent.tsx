import styled from 'styled-components';
import { songs } from '../../constants/songs';
import PlayListItem from '../@common/PlayListItem';

const MusicListComponent = () => {
  const handleClick = (title: string) => {
    console.log(`Playing ${title}`);
  };

  return (
    <MusicListComponentWrapper>
      {songs.map((song) => (
        <PlayListItem
          key={song.id}
          title={song.title}
          artist={song.artist}
          onClick={() => handleClick(song.title)}
        />
      ))}
    </MusicListComponentWrapper>
  );
};

export default MusicListComponent;

const MusicListComponentWrapper = styled.div`
  gap: 2.4rem;
  margin: 1.2rem 2rem 0 2rem;
  ${({ theme }) =>
    theme.mixin.flexCenter({
      direction: 'column',
    })};
`;
