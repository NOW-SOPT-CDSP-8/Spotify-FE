import styled from 'styled-components';
import SubscribeInfo from './SubscribeInfo';
import SubscribeCardInfo from './SubscribeCardInfo';
import InfoButton from './InfoButton';
import { IcFlatrate, IcPayment } from '../../assets/svg';
import { useEffect, useState } from 'react';
import { useGetProfile } from '../../hooks/queries/profile';

const Subscribe = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');

  const { data, error, isLoading } = useGetProfile();

  useEffect(() => {
    if (data) {
      setFirstName(data.memberName.slice(1));
      setLastName(data.memberName[0]);
      setCardName(data.card.cardName);
      setCardNumber(data.card.cardNumber);
      setCardType(data.card.cardType);
    }
  }, [data]);

  console.log('Data:', data);
  console.log('Error:', error);
  console.log('Loading:', isLoading);

  return (
    <SubscribeWrapper>
      <InfoContainer>
        <SubscribeInfo lastName={lastName} firstName={firstName} />
        <SubscribeCardInfo
          cardName={cardName}
          cardType={cardType}
          cardNumber={cardNumber}
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
