import styled from 'styled-components';

interface SubscribeCardInfoProps {
  cardName: string;
  cardType: string;
  cardNumber: string;
}

const SubscribeCardInfo = (props: SubscribeCardInfoProps) => {
  const { cardName, cardType, cardNumber } = props;
  return (
    <SubscribeCardInfoWrapper>
      <CardContainer>
        <ImgContainer>
          <img src='src/assets/png/CardImg.png' alt='subscribeCardImg' />
        </ImgContainer>
        <TextContainer>
          <CardName>{cardName}</CardName>
          <CardInfo>
            {cardType} | {cardNumber}
          </CardInfo>
        </TextContainer>
      </CardContainer>
      <CardUpdateBtn>카드 업데이트</CardUpdateBtn>
    </SubscribeCardInfoWrapper>
  );
};

export default SubscribeCardInfo;

const SubscribeCardInfoWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexCenter({
      direction: 'row',
    })};
  gap: 95px;
  margin-top: 16.35px;
  height: 58px;
`;

const CardContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'center',
    })};
  gap: 1.6rem;
`;

const ImgContainer = styled.div`
  img {
    width: 37px;
    height: 58px;
    flex-shrink: 0;
  }
`;

const TextContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'center',
    })};
`;

const CardName = styled.p`
  ${({ theme }) => theme.fonts.body2_medi};
  color: ${({ theme }) => theme.colors.gray200};
`;

const CardInfo = styled.p`
  ${({ theme }) => theme.fonts.body2_reg};
  color: ${({ theme }) => theme.colors.gray300};
`;

const CardUpdateBtn = styled.button`
  ${({ theme }) =>
    theme.mixin.flexCenter({
      direction: 'column',
    })};
  padding: 5px 16px;
  gap: 10px;
  border-radius: 29px;
  background: ${({ theme }) => theme.colors.gray400};
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.button};
`;
