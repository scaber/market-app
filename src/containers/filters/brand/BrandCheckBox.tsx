import { Checkbox, Row } from 'antd'
 import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { StylesDictionary } from '../../../components/StylesDictionary';
import { deleteFilter, getFilters, updateFilters } from '../../../features/product/FiltersSlice';
import { Brand } from '../../../models/brand';
 import "../style.css"

interface Props  {
    brand: Brand;
 
  };
  const styles:StylesDictionary =   {
    row: {
        cursor: "pointer",
        marginBottom: "18px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "initial",
    }, 
    span:{
        marginTop: "3px",
        marginLeft: "12px",
        fontSize: "14px",
    }
  };
 const BrandCheckBox:React.FC<Props> = ({brand}) => {

    const dispatch = useAppDispatch();
  const { manufacturer, ...filters } = useAppSelector(getFilters);

  const toggleFilter = () => {
    const index = manufacturer?.findIndex((b) => b === brand.key);
    const oldManufacturerArr = manufacturer ? [...manufacturer] : [];

    //if exists
    if (index === -1 || index === undefined) {
      //insert to filter array
      dispatch(
        updateFilters({
          ...filters,
          manufacturer: [...oldManufacturerArr,  brand.key],
        })
      );
    } else {
      if (typeof index === "number") {
        oldManufacturerArr.splice(index, 1);

        //remove from filter array
        dispatch(
          updateFilters({
            ...filters,
            manufacturer: manufacturer?.filter((m) => m !==  brand.key),
          })
        );
      }
    }
  };

  const clearFilter = () => {
    dispatch(deleteFilter("manufacturer"));
  };
  return (
    <Row style={styles.row} onClick={()=>brand.key.toUpperCase()==="ALL" ?clearFilter():toggleFilter()}>
      <Checkbox className='squareCheckBox'
        checked={
          (manufacturer && manufacturer.some((m) => m === brand.key)) ||
          (!manufacturer && brand.key.toUpperCase() === "ALL") ||
          (manufacturer &&
            brand.key.toUpperCase() === "ALL" &&
            manufacturer.length === 0)
        }
      />
      <span style={styles.span}>
        {brand.key} <span>({brand.value})</span>
      </span>
    </Row>
  )
}
export default BrandCheckBox