import styled from 'styled-components';
import { IcLike } from '../../assets/svg/index';

interface LikeComponentProps {
  likeCount: number;
  onClick: () => void;
}

const LikeComponent = ({ likeCount, onClick }: LikeComponentProps) => {
  return (
    <>
      <TextContainer>좋아요 {likeCount}개 · 1시간 53분</TextContainer>
      <LikeIcon onClick={onClick} />
    </>
  );
};

export default LikeComponent;

const TextContainer = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: 1.5rem;
  ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.gray100};
`;

const LikeIcon = styled(IcLike)`
  ${({ theme }) => theme.mixin.flexCenter({})};
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  margin-left: 7.1rem;
`;
