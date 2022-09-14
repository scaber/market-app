 import React, { useState } from 'react'
import { useAppSelector } from '../../../app/hooks';
import { getBrands } from '../../../features/brand/brandSlice';
import FilterContainer from "../FilterContainer";
import { FilterTitle } from '../FilterTitle';
import BrandCheckBox from './BrandCheckBox';
import "../style.css"
  const BrandFilters = () => {
    const { brands } = useAppSelector(getBrands);
    const [query, setQuery] = useState("");
 
  return (
    <>
      <FilterTitle title="Brands" />
      <FilterContainer>
        <input className='filterInput'
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={"Search brand"}
        />
        <div className="filterContainer">
          {brands &&
            brands
              .filter(
                (brand) =>
                  brand.key.toUpperCase().indexOf(query.toUpperCase()) > -1 ||
                  brand.key.toUpperCase() === "ALL"
              )
              .map((brand, i) => <BrandCheckBox key={i} brand={brand} />)}
        </div>
      </FilterContainer>
    </>
  );
}
export default BrandFilters;
