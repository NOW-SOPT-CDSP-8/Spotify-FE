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
  margin-left: 8px;
  margin-right: 9px;
  flex-shrink: 0;
  border-radius: 7px;
  background: ${({ theme }) => theme.colors.gray700};
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'center',
    })};
  color: ${({ theme }) => theme.colors.white};
  gap: 22px;
`;

const InfoContainer = styled.div`
  border-radius: 7px;
  padding: 10px 12px 17px 12px;
  background: var(--gray700, #181818);
`;
