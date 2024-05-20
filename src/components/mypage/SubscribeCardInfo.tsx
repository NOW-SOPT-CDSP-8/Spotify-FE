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
  gap: 9.5rem;
  margin-top: 1.635rem;
  height: 5.8rem;
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
    width: 3.7rem;
    height: 5.8rem;
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
  line-height: 140%;
  display: block;
  font-family: 'SF Pro';
  font-weight: 510;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray200};
`;

const CardInfo = styled.p`
  line-height: 140%;
  display: block;
  font-family: 'SF Pro';
  font-weight: 510;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray300};
`;

const CardUpdateBtn = styled.button`
  ${({ theme }) =>
    theme.mixin.flexCenter({
      direction: 'column',
    })};
  padding: 0.5rem 1.6rem;
  gap: 1rem;
  border-radius: 2.9rem;
  background: ${({ theme }) => theme.colors.gray400};
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.button};
`;
