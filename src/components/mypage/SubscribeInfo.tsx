import styled from 'styled-components';
import { IcArrow, IcLogopink, IcName } from '../../assets/svg';

interface SubscribeInfoProps {
  lastName: string;
  firstName: string;
}

const SubscribeInfo = (props: SubscribeInfoProps) => {
  const { lastName, firstName } = props;
  return (
    <SubscribeInfoWrapper>
      <NameContainer>
        <TextContainer>
          <NameIcon />
          <LastNameText>{lastName}</LastNameText>
          <FirstNameText>{firstName}님의 요금제</FirstNameText>
        </TextContainer>
        <LogoPinkIcon />
      </NameContainer>
      <SubscribeTextContainer>
        <TitleContainer>
          <TItleText>Premium 개인</TItleText>
          <ArrowIcon />
        </TitleContainer>
        <SubText>다음 달 24. 6.5.에 11,990 KRW가 청구됩니다.</SubText>
      </SubscribeTextContainer>
    </SubscribeInfoWrapper>
  );
};

export default SubscribeInfo;

const SubscribeInfoWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'center',
    })};
  width: 100%;
  gap: 0.4rem;
s`;

const NameContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'center',
      justify: 'space-between',
    })};
  gap: 0.7rem;
  width: 100%;
`;

const TextContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'center',
    })};
  gap: 7px;
`;

const NameIcon = styled(IcName)`
  width: 32.136px;
  height: 32.136px;
  flex-shrink: 0;
`;

const LastNameText = styled.p`
  ${({ theme }) => theme.fonts.body2_medi};
  color: ${({ theme }) => theme.colors.black};
  z-index: 1;
  position: absolute;
  margin-left: 9px;
  margin-top: 3px;
`;

const FirstNameText = styled.p`
  ${({ theme }) => theme.fonts.body3_reg};
  color: ${({ theme }) => theme.colors.white};
`;

const LogoPinkIcon = styled(IcLogopink)`
  width: 28px;
  height: 28px;
`;

const SubscribeTextContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
  width: 100%;
  gap: 0.8rem;
`;

const TitleContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'center',
      justify: 'flex-start',
    })};
  gap: 1.5rem;
`;

const TItleText = styled.p`
  color: #ffd2d7;
  ${({ theme }) => theme.fonts.title4};
`;

const ArrowIcon = styled(IcArrow)`
  width: 17px;
  height: 20px;
  color: ${({ theme }) => theme.colors.gray200};
`;

const SubText = styled.p`
  ${({ theme }) => theme.fonts.body2_reg};
  color: ${({ theme }) => theme.colors.gray200};
`;
