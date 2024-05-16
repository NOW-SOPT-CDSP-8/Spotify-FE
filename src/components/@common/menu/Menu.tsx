import { useState } from 'react';
import styled from 'styled-components';
import { IcClose } from '../../../assets/svg';

interface MenuProps {}

const Menu = ({}: MenuProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <MenuWrapper>
      <CloseBtn />
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: auto;
`;

const CloseBtn = styled(IcClose)`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 33.4rem;
  margin-top: 1.97rem;
`;
