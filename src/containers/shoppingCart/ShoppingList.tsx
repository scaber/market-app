import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { getBasketItems } from '../../features/basket/basketSlice';
  import  ShopItem from "./ShopItem";
  import "./style.css"
 
  const ShoppingList = () => {
  const basket = useAppSelector(getBasketItems);
 
  return (
    <div className='shopList'>{basket &&
      basket.items &&
      basket.items.map((b, i) => (
        <ShopItem key={i} product={b.item} basketCount={b.count} />
      ))}</div>
  )
}
export default ShoppingList;
