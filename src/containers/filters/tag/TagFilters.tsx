 import React, { useState } from 'react'
import { useAppSelector } from '../../../app/hooks';
import { getTags } from '../../../features/tag/tagSlice';
import FilterContainer from '../FilterContainer';
import { FilterTitle } from '../FilterTitle';
import { TagCheckBox } from './TagCheckBox';

  const TagFilters = () => {
    const { tags } = useAppSelector(getTags);  
    const [query, setQuery] = useState("");
  return (
    <>
  <FilterTitle title='Tag' />
       <FilterContainer>
       <input className='filterInput'
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={"Search tag"}
        />
         <div className='filterContainer'>
         {tags &&
            tags
              .filter(
                (tag) =>
                  tag.key.toUpperCase().indexOf(query.toUpperCase()) > -1 ||
                  tag.key.toUpperCase() === "ALL"
              )
              .map((tag, i) => <TagCheckBox key={i} tag={tag} />)}
              </div>
      </FilterContainer>
  </>
  )
}
export default TagFilters;