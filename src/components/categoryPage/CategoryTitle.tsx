import styled from 'styled-components';
interface CategoryTitleProps {
  children: React.ReactNode;
}
const CategoryTitle = ({ children }: CategoryTitleProps) => {
  return (
    <CategoryTitleWrapper>
      <Title>{children}</Title>
      <MoreBtn>모두 표시</MoreBtn>
    </CategoryTitleWrapper>
  );
};

export default CategoryTitle;

const CategoryTitleWrapper = styled.section`
  ${({ theme }) =>
    theme.mixin.flexBox({ align: 'center', justify: 'space-between' })};
  margin: 3.5rem 1.5rem 2.3rem;
`;
const Title = styled.p`
  ${({ theme }) => theme.fonts.headline1};
  color: ${({ theme }) => theme.colors.white};
`;
const MoreBtn = styled.p`
  ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.white};
`;
