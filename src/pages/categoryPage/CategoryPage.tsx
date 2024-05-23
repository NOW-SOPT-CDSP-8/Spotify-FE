import styled from 'styled-components';
import PlaylistCardList from '../../components/@common/card/PlaylistCardList';
import CategoryFilter from '../../components/categoryPage/CategoryFilter';
import CategoryHeader from '../../components/categoryPage/CategoryHeader';
import CategoryTitle from '../../components/categoryPage/CategoryTitle';
import CategoryRank from '../../components/categoryPage/CategoryRank';

interface CategoryPageProps {}

const predata = [
  {
    imgUrl: 'https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg',
    title: 'Sunny Beach',
    description: 'A beautiful sunny beach with crystal clear water.',
  },
  {
    imgUrl: 'https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg',
    title: 'Mountain Landscape',
    description: 'A breathtaking view of the mountain range during sunset.',
  },
  {
    imgUrl: 'https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg',
    title: 'City Skyline',
    description: 'A panoramic view of a bustling city skyline at night.',
  },
  {
    imgUrl: 'https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg',
    title: 'Forest Pathway',
    description: 'A serene pathway through a dense forest with tall trees.',
  },
  {
    imgUrl: 'https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg',
    title: 'Forest Pathway',
    description: 'A serene pathway through a dense forest with tall trees.',
  },
  {
    imgUrl: 'https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg',
    title: 'Forest Pathway',
    description: 'A serene pathway through a dense forest with tall trees.',
  },
];

const predata2 = [
  {
    imgUrl: 'https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg',
    title: 'Sunny Beach',
  },
  {
    imgUrl: 'https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg',
    title: 'Mountain Landscape',
  },
  {
    imgUrl: 'https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg',
    title: 'City Skyline',
  },
  {
    imgUrl: 'https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg',
    title: 'Forest Pathway',
  },
  {
    imgUrl: 'https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg',
    title: 'Forest Pathway',
  },
  {
    imgUrl: 'https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg',
    title: 'Forest Pathway',
  },
];
console.log(predata2);
const CategoryPage = ({}: CategoryPageProps) => {
  return (
    <>
      <CategoryHeader />
      <CategoryFilter />
      <CategoryTitle>플레이리스트</CategoryTitle>
      <CategoryContent>
        <PlaylistCardList datas={predata} />
      </CategoryContent>
      <CategoryTitle>최신 팝 음악</CategoryTitle>
      <CategoryContent>
        <PlaylistCardList datas={predata} />
      </CategoryContent>
      <CategoryTitle>인기 팝 음악</CategoryTitle>
      <CategoryRank />
    </>
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
