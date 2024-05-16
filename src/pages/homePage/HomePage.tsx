import styled from 'styled-components';
import RecommendStation from '../../components/homePage/RecommendStation';
import ExploreSection from './ExploreSection';
import ArtistSection from './ArtistSection';

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <HomePageWrapper>
      <RecommendStation />
      <ExploreSection />
      <ArtistSection />
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled.section`
  margin-left: 1.6rem;
`;
