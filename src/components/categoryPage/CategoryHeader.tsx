import styled from 'styled-components';
import { IcCategoryheader } from '../../assets/svg';

const CategoryHeader = () => {
  return (
    <CategoryHeaderWrapper>
      <CategoryImg />
      <CategoryTitle>팝</CategoryTitle>
    </CategoryHeaderWrapper>
  );
};

export default CategoryHeader;

const CategoryHeaderWrapper = styled.header`
  position: relative;
`;

const CategoryImg = styled(IcCategoryheader)`
  background: linear-gradient(
    180deg,
    rgba(18, 18, 18, 0) 0%,
    ${({ theme }) => theme.colors.gray900} 100%
  );
`;

const CategoryTitle = styled.h1`
  position: absolute;
  top: 1.6rem;
  left: 1.5rem;
  ${({ theme }) => theme.fonts.title2};
  color: ${({ theme }) => theme.colors.white};
`;
