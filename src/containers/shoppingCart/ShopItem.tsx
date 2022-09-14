import { Col, Row } from 'antd'
import React from 'react'
import { ProductName } from '../../components/ProductName'
import { ProductPrice } from '../../components/ProductPrice';
import { ProductModel } from '../../models/product';
import { BasketButton } from '../buttonGroup/BasketButton';

interface Props  {
    product: ProductModel;
    basketCount: number;
  };

  const ShopItem: React.FC<Props> = ({ product, basketCount }) => {
  return (
    <Col  style={{width:"100%",fontWeight:"300"}} span={24}>
      <Row align="middle" justify="space-between">
        <Col span={16}>
          <ProductName name={product.name}  noMargin={false} />
          <ProductPrice price={product.price} />
        </Col>
        <Col span={8}>
          <BasketButton item={product} basketCount={basketCount} />
        </Col>
      </Row>
    </Col>
  );
}
export default ShopItem;
