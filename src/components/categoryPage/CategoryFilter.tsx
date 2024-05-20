import { useState } from 'react';
import FilterButton from '../@common/FilterButton';
import styled from 'styled-components';
import { filters } from '../../constants/categoryFilter';

const CategoryFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('전체');

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };
  return (
    <FilterWrapper>
      {filters.map((filter) => (
        <FilterButton
          key={filter}
          isSelect={selectedFilter === filter}
          onClick={() => handleFilterClick(filter)}
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
