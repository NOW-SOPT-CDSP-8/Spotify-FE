import styled from 'styled-components';
import { IcLike } from '../../assets/svg/index';

interface LikeComponentProps {
  likeCount: number;
}

const LikeComponent = (props: LikeComponentProps) => {
  const { likeCount } = props; // 임시로 props로 만들어뒀습니다. 기능 구현 시 수정하시면 됩니다!
  return (
    <>
      <TextContainer>좋아요 {likeCount}개 · 1시간 53분</TextContainer>
      <LikeIcon />
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
