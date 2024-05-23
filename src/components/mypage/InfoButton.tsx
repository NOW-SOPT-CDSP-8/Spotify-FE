import styled from 'styled-components';
import { IcEditbox, IcRestorebox } from '../../assets/svg';

const InfoButton = () => {
  return (
    <InfoButtonWrapper>
      <InfoButtonContainer>
        <EditIcon />
        <InfoText>프로필 편집하기</InfoText>
      </InfoButtonContainer>
      <InfoButtonContainer>
        <RestoreboxIcon />
        <InfoText>플레이리스트 복구하기</InfoText>
      </InfoButtonContainer>
    </InfoButtonWrapper>
  );
};

export default InfoButton;

const InfoButtonWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexCenter({
      direction: 'row',
    })};
  gap: 1.1rem;
  margin-top: 1.62rem;
  margin-bottom: 1.7rem;
`;

const InfoButtonContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexCenter({
      direction: 'column',
    })};
  gap: 0.5rem;
  width: 16.1rem;
  height: 7.4rem;
  flex-shrink: 0;
  border-radius: 0.7rem;
  background: ${({ theme }) => theme.colors.gray500};
`;

const EditIcon = styled(IcEditbox)`
  width: 3rem;
  height: 3rem;
`;

const RestoreboxIcon = styled(IcRestorebox)`
  width: 3rem;
  height: 3rem;
`;

const InfoText = styled.p`
  ${({ theme }) => theme.fonts.button};
  color: ${({ theme }) => theme.colors.gray200};
`;
