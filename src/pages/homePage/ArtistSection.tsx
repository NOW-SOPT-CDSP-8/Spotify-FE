import styled from 'styled-components';
import { IcArtist1 } from '../../assets/svg';

const ArtistSection = () => {
  return (
    <ArtistSectionWrapper>
      <ArtistIcon />
      <ArtistDetailContainer>
        <ArtistName>Peggy Gou</ArtistName>
        {/* 정안TODO 장르 부분 디쟌쌤들 연락오면 폰트 바꾸기 */}
        <SubText>장르 하우스 뮤직, 테크노</SubText>
      </ArtistDetailContainer>
    </ArtistSectionWrapper>
  );
};

export default ArtistSection;

const ArtistSectionWrapper = styled.section`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'start',
      justify: 'start',
    })};
  margin-top: 2.3rem;
`;

const ArtistIcon = styled(IcArtist1)`
  width: 4.2rem;
  height: 4.2rem;
`;

const ArtistName = styled.div`
  ${({ theme }) => theme.fonts.body2_medi};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 0.7rem;
`;

const SubText = styled.p`
  ${({ theme }) => theme.fonts.caption2};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 0.8rem;
`;

const ArtistDetailContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'start',
      justify: 'start',
    })};
  gap: 0.2rem;
  margin-top: 1rem;
`;
