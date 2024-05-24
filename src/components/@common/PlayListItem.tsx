import styled from 'styled-components';
import { IcOption, IcPlayListItemImg } from '../../assets/svg';

interface PlayListItemProps {
  title: string;
  artist: string;
  imgUrl?: string;
  onClick: () => void;
}

const PlayListItem = (props: PlayListItemProps) => {
  const { title, artist, onClick } = props;
  return (
    <PlayListItemWrapper onClick={onClick}>
      <MusicContainer>
        <PlayListItemImg />
        <TextContainer>
          <Title>{title}</Title>
          <Artist>{artist}</Artist>
        </TextContainer>
      </MusicContainer>

      <MenuIcon />
    </PlayListItemWrapper>
  );
};

export default PlayListItem;

const PlayListItemWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexCenter({
      direction: 'row',
      align: 'center',
      justify: 'space-around',
    })};
  width: 33.5rem;
  height: 4.6rem;
  gap: 0.4rem;
  flex-shrink: 0;
`;

const MusicContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'center',
    })};
  width: 31.4rem;
  height: 4.6rem;
  flex-shrink: 0;
`;

const PlayListItemImg = styled(IcPlayListItemImg)`
  width: 4.6rem;
  height: 4.6rem;
  flex-shrink: 0;
`;

const TextContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'flex-start',
    })};
  width: 25rem;
  padding: 0px 1.2rem;
  gap: 0.2rem;
  flex-shrink: 0;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.detail1};
  color: ${({ theme }) => theme.colors.white};
`;

const Artist = styled.div`
  ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.gray200};
`;

const MenuIcon = styled(IcOption)`
  width: 1.7rem;
  height: 1.7rem;
  flex-shrink: 0;
`;
