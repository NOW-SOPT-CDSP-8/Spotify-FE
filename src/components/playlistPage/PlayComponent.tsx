import styled from 'styled-components';
import { IcPlay } from '../../assets/svg';

const PlayComponent = () => {
  return (
    <PlayComponentWrapper>
      <PlayIcon />
      <PlayTime>00:30</PlayTime>
      <PlayBar />
    </PlayComponentWrapper>
  );
};

export default PlayComponent;

const PlayComponentWrapper = styled.div`
  width: 37.5rem;
  height: 8.6rem;
  flex-shrink: 0;
  position: fixed;
  bottom: 0;
  z-index: 1;
  backdrop-filter: blur(1.5rem);
  background: rgba(0, 0, 0, 0.2);
  ${({ theme }) =>
    theme.mixin.flexCenter({
      direction: 'row',
    })};
`;

const PlayIcon = styled(IcPlay)`
  width: 4.8rem;
  height: 4.8rem;
  fill: ${({ theme }) => theme.colors.green};
`;

const PlayTime = styled.p`
  top: 2.1rem;
  right: 1.6rem;
  position: fixed;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.caption3};
`;

const PlayBar = styled.div`
  width: 30.7rem;
  height: 0.5rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: var(--gray200, #a5a5a5);
`;
