import React from 'react'
import { Col } from "antd";
import ProductList from '../product-list/ProductList';
import ItemTypeFilter from '../itemTypeFilter/ItemTypeFilter';

const styles = {
  col: {
    width: "100%",
    padding: "0 !important",
    borderRadius: "2px",
  },
  titleDiv: {
    marginBottom: "16px",
    fontSize: "20px",
    color: "#6f6f6f",
  },
};
  const ProductDashboard = () => {

  return (
    <Col span={24} style={styles.col}>
      <Col span={24} style={{ paddingLeft: 0 }}>
        <div style={styles.titleDiv}>Products</div>
      </Col>
      <Col xs={0} sm={0} md={24} style={{ paddingLeft: 0 }}>
        <ItemTypeFilter />
      </Col>
      <Col xs={24} sm={24} md={0} style={{ paddingLeft: 0 }}>
        PopupFilters
      </Col>
      <Col span={24} flex="auto" style={{ paddingLeft: 0, paddingRight: 0 }}>
        {" "}
        <ProductList />
      </Col>
    </Col>
  );
}
export default ProductDashboard;
