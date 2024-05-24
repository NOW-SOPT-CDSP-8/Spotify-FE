import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import PlayListItem from '../@common/PlayListItem';
import useMusicInfiniteQuery from '../../hooks/queries/useMusicInfiniteQuery';
import { Musics } from '../../types/music/client';

const MusicListComponent = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useMusicInfiniteQuery(-1);
  const [musics, setMusics] = useState<Musics[]>([]);

  type LastPage = {
    items: Musics[];
    nextPage: number | undefined;
  };

  useEffect(() => {
    if (data?.pages) {
      const newMusics = data.pages.flatMap((page: LastPage) => page.items);
      setMusics(newMusics);
      console.log('musics', musics);
    }
  }, [data]);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isFetchingNextPage) {
        console.log('로딩!');
        fetchNextPage();
      }
    });

    if (bottomRef.current) {
      observerRef.current.observe(bottomRef.current);
    }

    return () => {
      if (observerRef.current && bottomRef.current) {
        observerRef.current.unobserve(bottomRef.current);
      }
    };
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
      <BottomForScrollEvent ref={bottomRef}></BottomForScrollEvent>
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

const BottomForScrollEvent = styled.div`
  height: 0.1rem;
`;
