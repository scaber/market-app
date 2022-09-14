import { Checkbox, Row } from 'antd';
import React from 'react'
import   FilterContainer   from '../FilterContainer';
import { FilterTitle } from '../FilterTitle';
import SortingCheckBox from './SortingCheckBox';

  const SortingFilters = () => {


  return (
    <>
      <FilterTitle title="Sorting" />
      <FilterContainer>
        <SortingCheckBox
          label="Price low to high"
          sortLike={{ sort: "price", order: "asc" }}
        />
        <SortingCheckBox
          label="Price high to low"
          sortLike={{ sort: "price", order: "desc" }}
        />
        <SortingCheckBox
          label="New to old"
          sortLike={{ sort: "added", order: "desc" }}
        />
        <SortingCheckBox
          label="Old to new"
          sortLike={{ sort: "added", order: "asc" }}
        />
        
      </FilterContainer>
    </>
  );
}
export default SortingFilters;
