import styled from 'styled-components';
import RecommendStation from '../../components/homePage/RecommendStation';
import ExploreSection from '../../components/homePage/ExploreSection';
import ArtistSection from '../../components/homePage/ArtistSection';
import RecommendGenre from '../../components/homePage/RecommendGenre';
import HouseMusicSection from '../../components/homePage/HouseMusicSection';
import SimilarArtist from '../../components/homePage/SimilarArtist';
import Subscribe from '../../components/homePage/Subscribe';

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <HomePageWrapper>
      <RecommendStation />
      <ExploreSection />
      <ArtistSection />
      <RecommendGenre />
      <HouseMusicSection />
      <SimilarArtist />
      <Subscribe />
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled.section`
  margin-left: 1.6rem;
`;
