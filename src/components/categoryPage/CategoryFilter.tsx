import { useState } from 'react';
import FilterButton from '../@common/FilterButton';
import styled from 'styled-components';

const CategoryFilter = () => {
  const filters = [
    '전체',
    '00’s & 10’s',
    '90’s',
    '80’s',
    '70’s',
    '필리핀 팝',
    '라틴 팝',
  ];
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
