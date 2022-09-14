import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { StylesDictionary } from '../../components/StylesDictionary';
import { getBasketItems } from '../../features/basket/basketSlice';
import { BasketType } from '../../models/basket';
 
const styles: StylesDictionary = {
  div: {
    border: "2px solid #1ea4ce",
    borderRadius: "2px",
    padding: "17px 24px",
    fontSize: "14px",
    fontWeight: "700",
    color: "#1ea4ce",
  },
};  
export  const calculateBasketAmount = ({ basket, currency = "₺" }: Props) => {
    const totalAmount = basket.items
      .reduce(
        (prevItem, currItem) => prevItem + currItem.count * currItem.item.price,
        0
      )
      .toFixed(2);
   
    return `${currency}${totalAmount}`;
}
type Props = {
    basket: BasketType;
    currency?: "₺";
  };
export const TotalAmount = () => {
    const basket = useAppSelector(getBasketItems);

  return (
    <div style={styles.div}>{ calculateBasketAmount({basket}) }</div>
  )
}
