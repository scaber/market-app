import { Button, Row  , Radio } from 'antd'
import React, {  useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { StylesDictionary } from '../../components/StylesDictionary';
import { deleteFilter, getFilters, updateFilters } from '../../features/product/FiltersSlice';
 import "./style.css"
const styles:StylesDictionary  = {
  row:{
    marginBottom: "16px"
  },
    button: {
        flexDirection : "column", 
        width: "auto",
        padding: "4px 16px",
        fontSize: "13px",
        fontWeight: 600,
        lineHeight: 0,
        verticalAlign: "middle",
        marginRight: "8px",
    } 
  } ;
  const ItemTypeFilter = () => {
  const [size, setSize] = useState("tes");

    const filters = useAppSelector(getFilters);
  const dispatch = useAppDispatch();
  
  // const [size, setSize] = useState("deg");
  // const [size, setSize] = useState("deg");
    return (
    <Row style={styles.row}> 
       <Radio.Group   value={size}   onChange={(e) => 
       { 
        dispatch( 
          updateFilters({
            ...filters,
            itemType: e.target.value,
          })
        );
        setSize(e.target.value)}}
         > 

      <Radio.Button className="switchButton"  value="mug" onChange={e => {
       }} 
        onClick={( ) => { 
          dispatch(
            updateFilters({
              ...filters,
              itemType: "mug",
            })
          );
        }}
      >
      mug
      </Radio.Button>
      <span style={{paddingLeft:"8px"}}> </span>
         <Radio.Button className="switchButton" value="shirt"   defaultChecked={true}  
      > shirt
      </Radio.Button>

      </Radio.Group>
      <span style={{paddingLeft:"8px"}}> </span> 
      {filters.itemType && (
        <Button onClick={ () => {
          setSize("def")
          dispatch(deleteFilter("itemType"));
        }} className="switchButton" > clear</Button>
      )}
    </Row>
  );
}
export default ItemTypeFilter;
