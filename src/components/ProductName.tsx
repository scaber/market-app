import React from 'react'
import { StylesDictionary } from './StylesDictionary';

interface Props  {
  name: string;
  noMargin?:boolean; 
};
   const styles:StylesDictionary  = { 
    productName:{
      color: "#191919",
      fontSize: "14px", 
      height:   "43px",  
      marginBottom:"8px"
    },
    productCardName:{
      color: "#191919",
      fontSize: "14px", 
      height:   "43px",  
      marginBottom:"-11px"
    }
  } ;
export const ProductName:React.FC<Props> = ({name,noMargin}) => {  return (
    <div style={noMargin==true?styles.productName:styles.productCardName}>{name}</div>
  )
}
