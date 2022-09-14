import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { StylesDictionary } from '../../components/StylesDictionary';
import { addItemToBasket, reduceItemFromBasket } from '../../features/basket/basketSlice';
import { ProductModel } from '../../models/product';
import sign from "../../assets/img/Sign.svg"
const styles: StylesDictionary = {
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  countDiv: {
    backgroundColor: "#1ea4ce",
    color: "#f2f0fd",
    fontSize: "12px",
    fontWeight: 600,
    height: "32px",
    width: "32px",
    padding: "5px 10px",
    verticalAlign: "middle",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  counterButton: {
    border: "unset",
    backgroundColor: "unset",
    fontSize: "20px",
    fontWeight: 700,
    color: "#1ea4ce",
    verticalAlign: "middle",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "unset",
    cursor: "pointer",
    margin: "0 4px",
    padding: 0,
    height: "22px",
  },
}; ;
  interface Props   {
    item: ProductModel;
    basketCount: number;
  };
export const BasketButton: React.FC<Props> = ({ item, basketCount }) => {
    const dispatch = useAppDispatch();

  return (
    <div style={styles.div}>
      <button style={styles.counterButton} onClick={() => dispatch(reduceItemFromBasket(item))}><img src= {sign}></img> </button>
      <div style={styles.countDiv}>{basketCount}</div>
      <button  style={styles.counterButton} onClick={() => dispatch(addItemToBasket(item))}>+</button>
    </div>
  );
}
