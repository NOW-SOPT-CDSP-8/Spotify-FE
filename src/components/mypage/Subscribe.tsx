import styled from 'styled-components';
import SubscribeInfo from './SubscribeInfo';
import SubscribeCardInfo from './SubscribeCardInfo';
import InfoButton from './InfoButton';
import { IcFlatrate, IcPayment } from '../../assets/svg';

const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <InfoContainer>
        <SubscribeInfo lastName='성' firstName='이름' />
        <SubscribeCardInfo
          cardName='토스뱅크카드'
          cardType='체크'
          cardNumber='3705'
        />
        <InfoButton />
      </InfoContainer>
      <IcFlatrate />
      <IcPayment />
    </SubscribeWrapper>
  );
};

export default Subscribe;

const SubscribeWrapper = styled.div`
  margin-left: 0.8rem;
  margin-right: 0.9rem;
  flex-shrink: 0;
  border-radius: 0.7rem;
  background: ${({ theme }) => theme.colors.gray700};
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'center',
    })};
  color: ${({ theme }) => theme.colors.white};
  gap: 2.2rem;
`;

const InfoContainer = styled.div`
  border-radius: 0.7rem;
  padding: 1rem 1.2rem 1.7rem 1.2rem;
  background: var(--gray700, #181818);
`;
