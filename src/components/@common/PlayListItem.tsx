import styled from 'styled-components';
import { IcOption } from '../../assets/svg';
import theme from '../../styles/theme';

interface PlayListItemProps {
  title: string;
  artist: string;
  onClick: () => void;
}

const PlayListItem = (props: PlayListItemProps) => {
  const { title, artist, onClick } = props;
  return (
    <PlayListItemWrapper onClick={onClick}>
      <ImgWrapper>
        <img src='src/assets/png/MusicCardImg.png' alt='Album cover' />
      </ImgWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </TextWrapper>
      <MenuButton>
        <IcOption />
      </MenuButton>
    </PlayListItemWrapper>
  );
};

export default PlayListItem;

const PlayListItemWrapper = styled.div`
  display: flex;
  width: 335px;
  height: 46px;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  background-color: black;
`;

const ImgWrapper = styled.div`
  img {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  width: 250px;
  padding: 0px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  flex-shrink: 0;
`;

const Title = styled.div`
  width: 255px;
  font-weight: bold;
  ${({ theme }) => theme.fonts.detail1};
  color: ${({ theme }) => theme.colors.white};
`;

const Artist = styled.div`
  ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.gray200};
`;

const MenuButton = styled.div`
  width: 17px;
  height: 17px;
  flex-shrink: 0;
`;
