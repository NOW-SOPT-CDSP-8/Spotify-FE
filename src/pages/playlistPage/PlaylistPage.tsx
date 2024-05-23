import styled from 'styled-components';
import InfoComponent from '../../components/playlistPage/InfoComponent';
import LogoComponent from '../../components/playlistPage/LogoComponent';
import MenuComponent from '../../components/playlistPage/MenuComponent';
import MusicListComponent from '../../components/playlistPage/MusicListComponent';
import PlayComponent from '../../components/playlistPage/PlayComponent';
import Header from '../../components/@common/header/Header';

interface PlaylistPageProps {}

const PlaylistPage = ({}: PlaylistPageProps) => {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #645e33 0%, #121212 54.3%)',
      }}
    >
      <Header />
      <PlayListPageWrapper>
        <CardImgContainer>
          <img src='src/assets/png/PlayListCard.png' alt='Album cover' />
        </CardImgContainer>
        <InfoComponent />
        <LogoComponent />
        <MenuComponent />
        <MusicListComponent />
        <BlankSection />
        <PlayComponent />
      </PlayListPageWrapper>
    </div>
  );
};

export default PlaylistPage;

const PlayListPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  gap: 0.4rem;
  overflow-y: auto;
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'flex-start',
    })};
  /* background: linear-gradient(180deg, #645e33 0%, #121212 54.3%); */
`;

const CardImgContainer = styled.div`
  width: 100%;
  margin-top: 1.1rem;
  ${({ theme }) => theme.mixin.flexCenter({ direction: 'column' })};
  img {
    width: 15rem;
    height: 15rem;
  }
`;

const BlankSection = styled.div`
  height: 8.6rem;
`;
