import React from 'react'
import { Col, Row } from "antd";
import { useAppSelector } from '../../app/hooks';
import { getBasketItems } from '../../features/basket/basketSlice';
import { TotalAmount } from './TotalAmount';
import ShoppingList from './ShoppingList';
const styles = {
    row: {
        border: "8px solid #1ea4ce",
        borderRadius: "2px",
        padding: "16px 0 16px 16px",
    },
    
  };
  const ShoppingCart = () => {
    const basket = useAppSelector(getBasketItems);

  return (
    <>
      <Row style={styles.row}>
        {basket && basket.items && basket.items.length === 0 && (
          <Col style={{ width: "100%", paddingRight: "16px" }}>
            <Row justify="center">
              <span>Your basket is empty</span>
            </Row>
          </Col>
        )}
        <ShoppingList/>
        {basket && basket.items && basket.items.length !== 0 && (
          <Row
            justify="end"
            style={{ width: "100%", paddingRight: "16px", marginTop: "16px" }}
          >
            <TotalAmount />
          </Row>
        )}
      </Row>
    </>
  );
}

export default ShoppingCart;
