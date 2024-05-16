import styled from 'styled-components';

const ExploreSection = () => {
  return (
    <ExploreSectionWrapper>
      <Title>더 파고들기</Title>
      <Description>관심있는 아티스트를 깊이 탐색할 수 있어요</Description>
    </ExploreSectionWrapper>
  );
};

export default ExploreSection;

const ExploreSectionWrapper = styled.section`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'start',
      justify: 'start',
    })};
  width: 34.3rem;
  height: 6.3rem;
  flex-shrink: 0;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1.5rem);
  margin-top: 4.3rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.headline1};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 1.6rem;
  margin-top: 1.2rem;
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.caption1};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 0.4rem;
  margin-left: 1.6rem;
`;
