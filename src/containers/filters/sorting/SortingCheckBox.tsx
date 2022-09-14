import { Checkbox, Row } from 'antd';
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { StylesDictionary } from '../../../components/StylesDictionary';
import { FiltersType, getFilters, updateFilters } from '../../../features/product/FiltersSlice';
 import "../style.css"
const styles:StylesDictionary  = {
    row: {
        cursor: "pointer",
        marginBottom:"16px",  
    },
    span:{
      marginTop:"3px",
      marginLeft:"12px",
      fontSize:"14px",
    }
     
  } ;
interface Props   {
    label: string;
    sortLike?: { order: FiltersType["_order"]; sort: FiltersType["_sort"] };
  };
 const SortingCheckBox:React.FC<Props> = ({label,sortLike}) => {

  const dispatch = useAppDispatch();
  const { _order, _sort, ...filters } = useAppSelector(getFilters);
  return (
    <Row
      style={styles.row}
      onClick={() =>
        dispatch(
          updateFilters({
            ...filters,
            _order: sortLike?.order,
            _sort: sortLike?.sort,
          })
        )
      }
    >
       <Checkbox className='circleCheckBox'
        checked={_order === sortLike?.order && _sort === sortLike?.sort}
      ></Checkbox>
      <span style={styles.span}>{label}</span>
    </Row>
  );
}
export default SortingCheckBox