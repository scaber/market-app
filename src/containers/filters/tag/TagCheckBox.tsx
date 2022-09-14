import { Checkbox, Row } from 'antd';
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { StylesDictionary } from '../../../components/StylesDictionary';
import { deleteFilter, getFilters, updateFilters } from '../../../features/product/FiltersSlice';
import { Tag } from "../../../models/tag";
 import "../style.css"
 
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
  interface Props   {
    tag: Tag;
  };
  
export const TagCheckBox:React.FC<Props> = ({tag}) => {
    const dispatch = useAppDispatch();
    const { tags_like, ...filters } = useAppSelector(getFilters);
    const toggleFilter = () => {
        const index = tags_like?.findIndex((b) => b === tag.key);
        const oldTagsArr = tags_like ? [...tags_like] : [];
    
        //if exists
        if (index === -1 || index === undefined) {
          //insert to filter array
          dispatch(
            updateFilters({
              ...filters,
              tags_like: [...oldTagsArr, tag.key],
            })
          );
        } else {
          if (typeof index === "number") {
            oldTagsArr.splice(index, 1);
    
            //remove from filter array
            dispatch(
              updateFilters({
                ...filters,
                tags_like: tags_like?.filter((m) => m !== tag.key),
              })
            );
          }
        }
      };
      const clearFilter = () => {
        dispatch(deleteFilter("tags_like"));
      };
  return (
    <Row onClick={() =>
        tag.key.toUpperCase() === "ALL" ? clearFilter() : toggleFilter()
      } style={styles.row}>
  <Checkbox className='squareCheckBox'
        checked={
          (tags_like && tags_like.some((m) => m === tag.key)) ||
          (!tags_like && tag.key.toUpperCase() === "ALL") ||
          (tags_like &&
            tag.key.toUpperCase() === "ALL" &&
            tags_like.length === 0)
        }
      />
      <span style={styles.span}>
        {tag.key} <span>({tag.value})</span>
      </span>
    </Row>
    

  )
}
