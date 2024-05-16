import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const AppOpenBtn = (props: PropsWithChildren) => {
  const { children, ...restProps } = props;
  return <AppOpenBtnContainer {...restProps}>{children}</AppOpenBtnContainer>;
};

const AppOpenBtnContainer = styled.article`
  ${({ theme }) =>
    theme.mixin.inlineFlexBox({ align: 'center', justify: 'center' })};
  padding: 0.5rem 1.6rem;
  border-radius: 70px;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const AppOpenBtnText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.button};
`;

AppOpenBtn.Text = AppOpenBtnText;

export { AppOpenBtn };
