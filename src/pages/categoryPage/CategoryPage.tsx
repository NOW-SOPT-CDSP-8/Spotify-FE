import styled from 'styled-components';
import CategoryFilter from '../../components/categoryPage/CategoryFilter';
import CategoryHeader from '../../components/categoryPage/CategoryHeader';
import CategoryTitle from '../../components/categoryPage/CategoryTitle';
import CategoryRank from '../../components/categoryPage/CategoryRank';
import PlaylistCardListWithDescriptionList from '../../components/@common/card/PlaylistCardListWithDescriptionList';
import { useGetMusicTitleWithPlaylist } from '../../hooks/queries/music';
import { Suspense, useState } from 'react';
import Loading from '../../components/@common/loading/Loading';
import { filters } from '../../constants/categoryFilter';
import { ranks } from '../../mocks/mockData';
import Header from '../../components/@common/header/Header';

interface CategoryPageProps {}

const CategoryPage = ({}: CategoryPageProps) => {
  const [filterId, setFilterId] = useState(1);
  const [genre, setGenre] = useState('pop');
  const { data } = useGetMusicTitleWithPlaylist(filterId, genre);
  const [selectedFilter, setSelectedFilter] = useState<string>('전체');

  if (!data || !data.data) {
    return <div>데이터를 불러오지 못했습니다.</div>;
  }

  const handleFilterClick = (filter: string, index: number) => {
    setSelectedFilter(filter);
    if (index < 6) {
      setFilterId(index);
      setGenre('pop');
    } else {
      if (index === 6) {
        setGenre('philipinepop');
      } else {
        setGenre('latinpop');
      }
      setFilterId(1);
    }
  };
  console.log(data.data);
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <CategoryHeader />
      <CategoryFilter
        handleFilterClick={handleFilterClick}
        filters={filters}
        selectedFilter={selectedFilter}
      />
      <CategoryTitle>플레이리스트</CategoryTitle>
      <CategoryContent>
        <PlaylistCardListWithDescriptionList data={data.data} playlist={true} />
      </CategoryContent>
      <CategoryTitle>최신 팝 음악</CategoryTitle>
      <CategoryContent>
        <PlaylistCardListWithDescriptionList data={data.data} recent={true} />
      </CategoryContent>
      <CategoryTitle>인기 팝 음악</CategoryTitle>
      <CategoryRank ranks={ranks} />
    </Suspense>
  );
};

export default CategoryPage;

const CategoryContent = styled.section`
  margin: 1.3rem 0;
  padding: 0 1.5rem;
  box-sizing: border-box;

  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
