import React from 'react'
import { StylesDictionary } from './StylesDictionary';
 const styles:StylesDictionary  = {
     
    divPrice:{
      color: "#1ea4ce",
      fontSize: "14px",
      height: "23px",
    } 
  } ;
  interface Props  {
    price?: number;
  };
export const ProductPrice:React.FC<Props> = ({price=0 }) => {
  return (
    <div style={styles.divPrice}>₺ <b>{ price}</b></div>

  )
}
