import { FC, SVGProps } from 'react';
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
  gap: 11px;
  margin-top: 16.2px;
  margin-bottom: 17px;
`;

const InfoButtonContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexCenter({
      direction: 'column',
    })};
  gap: 0.5rem;
  width: 161px;
  height: 74px;
  flex-shrink: 0;
  border-radius: 7px;
  background: var(--gray500, #222);
`;

const EditIcon = styled(IcEditbox)`
  width: 30px;
  height: 30px;
`;

const RestoreboxIcon = styled(IcRestorebox)`
  width: 30px;
  height: 30px;
`;

const InfoText = styled.p`
  ${({ theme }) => theme.fonts.button};
  color: ${({ theme }) => theme.colors.gray200};
`;
