import styled from 'styled-components';

interface PlaylistCardProps {
  imgUrl: string;
  title: string;
  description?: string;
  borderRadius?: string;
  gap?: string;
}

const PlaylistCard = ({
  imgUrl = 'https://pbs.twimg.com/media/FYznstoXEAATx8k.jpg',
  title = 'THE TORTURED POETS Department',
  description ,
  borderRadius = '0.5rem',
  gap = '1rem',
}: PlaylistCardProps) => {
  return (
    <PlaylistCardWrapper>
      <PlaylistCardImg src={imgUrl} borderRadius={borderRadius} gap={gap} />
      <PlaylistCardTitle>{title}</PlaylistCardTitle>
      {description && (
        <PlaylistCardDescription>{description}</PlaylistCardDescription>
      )}
    </PlaylistCardWrapper>
  );
};

export default PlaylistCard;

const PlaylistCardWrapper = styled.section`
  width: 14.6rem;
  background: ${({ theme }) => theme.colors.gray900};
`;
const PlaylistCardImg = styled.img<{ borderRadius: string; gap: string }>`
  width: 100%;
  height: 14.6rem;
  margin-bottom: ${({ gap }) => gap};

  border-radius: ${({ borderRadius }) => borderRadius};
`;
const PlaylistCardTitle = styled.h1`
  max-width: 90%;
  ${({ theme }) => theme.fonts.detail1};
  margin-bottom: 0.3rem;

  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const PlaylistCardDescription = styled.p`
  ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.gray200};
`;
