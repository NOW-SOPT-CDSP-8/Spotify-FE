import FilterButton from '../@common/FilterButton';
import styled from 'styled-components';

interface CategoryFilterProps {
  handleFilterClick: (filter: string, index: number) => void;
  filters: string[];
  selectedFilter: string;
}

const CategoryFilter = ({
  handleFilterClick,
  filters,
  selectedFilter,
}: CategoryFilterProps) => {
  return (
    <FilterWrapper>
      {filters.map((filter, index) => (
        <FilterButton
          key={filter}
          isSelect={selectedFilter === filter}
          onClick={() => handleFilterClick(filter, index + 1)}
        >
          {filter}
        </FilterButton>
      ))}
    </FilterWrapper>
  );
};

export default CategoryFilter;

const FilterWrapper = styled.section`
  margin: 1.3rem 0;
  padding: 0 1.5rem;

  ${({ theme }) => theme.mixin.flexBox({ align: 'start', justify: 'start' })};
  gap: 0.8rem;
  white-space: nowrap;

  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
