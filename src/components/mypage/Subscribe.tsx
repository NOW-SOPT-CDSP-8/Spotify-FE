import styled from 'styled-components';
import SubscribeInfo from './SubscribeInfo';
import SubscribeCardInfo from './SubscribeCardInfo';
import InfoButton from './InfoButton';
import { IcFlatrate, IcPayment } from '../../assets/svg';
import { useEffect, useState } from 'react';
import { fetchProfileData } from './mypage_api';

const Subscribe = () => {
  const [memberName, setMemberName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardData, setCardData] = useState({});
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProfileData();
      if (data) {
        const { memberName, card } = data;

        const firstName = memberName.slice(1);
        const lastName = memberName[0];

        setMemberName(memberName);
        setFirstName(firstName);
        setLastName(lastName);
        setCardName(card.cardName);
        setCardType(card.cardType);
        setCardNumber(card.cardNumber);
      }
    };

    getData();
  }, []);

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
