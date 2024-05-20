import styled from 'styled-components';
import Subscribe from '../../components/mypage/Subscribe';

interface MypageProps {}

const Mypage = ({}: MypageProps) => {
  return (
    <Mywrapper>
      <Subscribe />
    </Mywrapper>
  );
};

export default Mypage;

const Mywrapper = styled.div`
  padding-top: 56px;
  height: 100vh;
`;
