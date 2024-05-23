import styled from 'styled-components';
import { useEffect, useState } from 'react';
import PlayListItem from '../@common/PlayListItem';
import useMusicInfiniteQuery from '../../hooks/queries/useMusicInfiniteQuery';

const MusicListComponent = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useMusicInfiniteQuery();
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    if (data?.pages) {
      const newMusics = data.pages.flatMap((page) => page.items);
      setMusics(newMusics);
      console.log('musics', musics);
    }
  }, [data]);

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log('로딩!');
        fetchNextPage();
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isFetchingNextPage, fetchNextPage]);

  return (
    <MusicListComponentWrapper>
      {musics.map((song) => (
        <PlayListItem
          key={song.musicId}
          title={song.musicTitle}
          artist={song.singer}
        />
      ))}
    </MusicListComponentWrapper>
  );
};

export default MusicListComponent;

const MusicListComponentWrapper = styled.div`
  gap: 2.4rem;
  margin: 1.2rem 2rem 8.6rem 2rem;
  ${({ theme }) =>
    theme.mixin.flexCenter({
      direction: 'column',
    })};
`;
