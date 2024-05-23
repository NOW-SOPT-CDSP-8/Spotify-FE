import styled from 'styled-components';
import Subscribe from '../../components/mypage/Subscribe';
import MypageHeader from '../../components/@common/header/MypageHeader';

interface MypageProps {}

const Mypage = ({}: MypageProps) => {
  return (
    <>
      <MypageHeader />
      <Mywrapper>
        <Subscribe />
      </Mywrapper>
    </>
  );
};

export default Mypage;

const Mywrapper = styled.div`
  padding-top: 56px;
  height: 100vh;
`;
