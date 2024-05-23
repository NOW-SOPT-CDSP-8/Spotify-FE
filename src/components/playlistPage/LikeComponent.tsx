import styled from 'styled-components';
import { IcClickHeart, IcLike } from '../../assets/svg/index';

interface LikeComponentProps {
  likeCount: number;
  onClick: () => void;
}

const LikeComponent = ({ likeCount, onClick }: LikeComponentProps) => {
  return (
    <>
      <TextContainer>좋아요 {likeCount}개 · 1시간 53분</TextContainer>
      {likeCount === 7 ? (
        <ClickLikeIcon onClick={onClick} />
      ) : (
        <LikeIcon onClick={onClick} />
      )}
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
  width: 4.8rem;
  height: 4.8rem;
  flex-shrink: 0;
  margin-left: 7.1rem;
`;

const ClickLikeIcon = styled(IcClickHeart)`
  ${({ theme }) => theme.mixin.flexCenter({})};
  width: 4.8rem;
  height: 4.8rem;
  padding: 1.2rem;
  flex-shrink: 0;
  margin-left: 7.1rem;
`;
