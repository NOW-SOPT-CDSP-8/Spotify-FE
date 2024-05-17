import styled from 'styled-components';

const PlayListInfo = () => {
  return (
    <PlayListInfoWrapper>
      <PlayListTitle>Starry Night 라디오</PlayListTitle>
      <PlayListContent>
        Peggy Gou, Nina Kraviz, Mall Grab, Ross from Friends 외 다양한
        아티스트와 함께
      </PlayListContent>
    </PlayListInfoWrapper>
  );
};

export default PlayListInfo;

const PlayListInfoWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'flex-start',
    })};
`;

const PlayListTitle = styled.div`
  margin-top: 1.7rem;
  margin-left: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title1};
`;

const PlayListContent = styled.div`
  margin-top: 0.8rem;
  margin-left: 1.5rem;
  margin-right: 3.2rem;
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.body3_reg};
`;
