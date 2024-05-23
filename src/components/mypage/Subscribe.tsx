import styled from 'styled-components';
import SubscribeInfo from './SubscribeInfo';
import SubscribeCardInfo from './SubscribeCardInfo';
import InfoButton from './InfoButton';
import { IcFlatrate, IcPayment } from '../../assets/svg';
import { Suspense } from 'react';
import { useGetProfile } from '../../hooks/queries/profile';
import Loading from '../@common/loading/Loading';

const Subscribe = () => {
  const { data, error, isLoading } = useGetProfile();

  console.log('Data:', data);
  console.log('Error:', error);
  console.log('Loading:', isLoading);

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <SubscribeWrapper>
        <InfoContainer>
          <SubscribeInfo
            lastName={data?.memberName[0]}
            firstName={data?.memberName.slice(1)}
          />
          <SubscribeCardInfo
            cardName={data?.card.cardName}
            cardType={data?.card.cardType}
            cardNumber={data?.card.cardNumber}
          />
          <InfoButton />
        </InfoContainer>
        <IcFlatrate />
        <IcPayment />
      </SubscribeWrapper>
    </Suspense>
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
