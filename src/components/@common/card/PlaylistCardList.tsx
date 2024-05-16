import PlaylistCard from './PlaylistCard';

const PlaylistCardList = () => {
  return (
    <>
      <PlaylistCard hasDescription={true}>
        <PlaylistCard.Img src='https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg' />
        <PlaylistCard.Title>THE TORTURED POETS Department</PlaylistCard.Title>
        <PlaylistCard.Description>팔로워 80,504명</PlaylistCard.Description>
      </PlaylistCard>
      <PlaylistCard hasDescription={false}>
        <PlaylistCard.Img src='https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg' />
        <PlaylistCard.Title>Minimalist Poets</PlaylistCard.Title>
      </PlaylistCard>
    </>
  );
};

export default PlaylistCardList;
