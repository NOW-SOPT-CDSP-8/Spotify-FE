import styled from 'styled-components';
import { IcLogoSingle, IcMenu, IcSearch } from '../../../assets/svg';
import { PropsWithChildren } from 'react';

const HeaderRoot = (props: PropsWithChildren<{ isPlaylistPage: boolean }>) => {
  const { children, isPlaylistPage, ...restProps } = props;
  return (
    <HeaderWrapper isPlaylistPage={isPlaylistPage} {...restProps}>
      {children}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.section<{ isPlaylistPage: boolean }>`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'center',
      justify: 'space-between',
    })};

  height: 5.6rem;
  /* background-color: ${({ theme }) => theme.colors.black}; */
  /* background: rgba(0, 0, 0, 0.45); */

  ${({ isPlaylistPage }) =>
    isPlaylistPage &&
    `
    background: rgba(0, 0, 0, 0.45);
  `}
`;

const HomeLogo = styled(IcLogoSingle)`
  width: 3.2rem;
  height: 3.2rem;
  margin-left: 1.6rem;
`;

const SearchIcon = styled(IcSearch)`
  width: 1.9rem;
  height: 1.9rem;
`;

const HeaderMenu = styled(IcMenu)`
  width: 4.8rem;
  height: 4.8rem;
  cursor: pointer;
`;

HeaderRoot.Logo = HomeLogo;
HeaderRoot.Icon = SearchIcon;
HeaderRoot.Menu = HeaderMenu;
export { HeaderRoot };
