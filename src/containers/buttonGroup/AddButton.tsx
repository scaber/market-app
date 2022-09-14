import { Button } from 'antd';
import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { addItemToBasket } from '../../features/basket/basketSlice';
import { ProductModel } from '../../models/product';
type Props = {
    product: ProductModel; 
  };

const styles = {
  button: {
    backgroundColor: "#1ea4ce",
    color: "#f2f0fd",
    fontWeight: 600,
    borderRadius: "4px",
    height: "22px",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
 const AddButton:React.FC<Props> = ({ product  }) => {
  const dispatch = useAppDispatch();
  return ( 
     <Button style={styles.button} block onClick={() => dispatch(addItemToBasket(product))}>
      Add
    </Button>
     
  )
}
export default AddButton
