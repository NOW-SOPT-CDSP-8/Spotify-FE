import styled from 'styled-components';

interface FilterButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isSelect?: boolean;
}

const FilterButton = (props: FilterButtonProps) => {
  const { children, onClick, isSelect = false } = props;
  return (
    <FilterButtonWrapper onClick={onClick} $isSelect={isSelect}>
      <FilterButtonText $isSelect={isSelect}>{children}</FilterButtonText>
    </FilterButtonWrapper>
  );
};

export default FilterButton;

const FilterButtonWrapper = styled.section<{ $isSelect: boolean }>`
  ${({ theme }) => theme.mixin.flexCenter({})};
  height: 3.2rem;
  padding: 1rem 1.6rem;
  gap: 1rem;
  border-radius: 29px;

  ${({ $isSelect, theme: { colors } }) =>
    $isSelect
      ? `
    background: ${colors.green}
  `
      : `background: ${colors.gray400}`};
`;

const FilterButtonText = styled.p<{ $isSelect: boolean }>`
  ${({ theme }) => theme.fonts.body3_semi};

  ${({ $isSelect, theme: { colors } }) =>
    $isSelect
      ? `
   
    color: ${colors.black};
  `
      : `color: ${colors.gray100}`};
`;
