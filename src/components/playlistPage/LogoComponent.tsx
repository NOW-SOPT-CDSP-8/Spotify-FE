import styled from 'styled-components';
import { IcLogo } from '../../assets/svg';

const LogoComponent = () => {
  return (
    <LogoComponentWrapper>
      <LogoIcon />
      <LogoText>Spotify</LogoText>
    </LogoComponentWrapper>
  );
};

export default LogoComponent;

const LogoComponentWrapper = styled.div`
  height: 2.4rem;
  margin-top: 1.1rem;
  margin-left: 1.5rem;
  gap: 0.7rem;
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'center',
    })};
`;

const LogoIcon = styled(IcLogo)`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  fill: ${({ theme }) => theme.colors.green};
`;

const LogoText = styled.p`
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.detail2};
`;
