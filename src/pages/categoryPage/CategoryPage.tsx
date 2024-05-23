import styled from 'styled-components';
import CategoryFilter from '../../components/categoryPage/CategoryFilter';
import CategoryHeader from '../../components/categoryPage/CategoryHeader';
import CategoryTitle from '../../components/categoryPage/CategoryTitle';
import CategoryRank from '../../components/categoryPage/CategoryRank';
import PlaylistCardListWithDescriptionList from '../../components/@common/card/PlaylistCardListWithDescriptionList';
import { useGetMusicTitleWithPlaylist } from '../../hooks/queries/music';
import { Suspense } from 'react';
import Loading from '../../components/@common/loading/Loading';
import Header from '../../components/@common/header/Header';

interface CategoryPageProps {}

const CategoryPage = ({}: CategoryPageProps) => {
  const { data } = useGetMusicTitleWithPlaylist(1, 'pop');

  if (!data || !data.data) {
    return <div>데이터를 불러오지 못했습니다.</div>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <CategoryHeader />
      <CategoryFilter />
      <CategoryTitle>플레이리스트</CategoryTitle>
      <CategoryContent>
        <PlaylistCardListWithDescriptionList data={data.data} />
      </CategoryContent>
      <CategoryTitle>최신 팝 음악</CategoryTitle>
      <CategoryContent>
        <PlaylistCardListWithDescriptionList data={data.data} />
      </CategoryContent>
      <CategoryTitle>인기 팝 음악</CategoryTitle>
      <CategoryRank />
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
