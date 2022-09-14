import React from "react";
import { Avatar, Button, Col, Row } from "antd";
import { ProductModel   } from "../../models/product";
import AddButton from "../buttonGroup/AddButton";
 import { ProductName } from "../../components/ProductName";
import { ProductPrice } from "../../components/ProductPrice";
import { StylesDictionary } from "../../components/StylesDictionary";

const styles:StylesDictionary  = {
  divAvatar: {
    border:" 1.18px solid #f3f0fe",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "7px",
    textAlign: "left",
    
  },  
  divPrice:{
    color: "#1ea4ce",
    fontSize: "14px",
    height: "23px",
  } 
} ;
interface Props  {
    product: ProductModel;
    dummyImage:string
   };


export const Product:React.FC<Props> = ({product ,dummyImage}) => {
  return (
    <Col xs={24} sm={12} md={12} lg={8} xl={6}>
      <Row justify="center">
        <div style={styles.divAvatar}>
          <Avatar
            style={{ backgroundColor: "#C4C4C4" }}
            src={dummyImage}
            shape="square"
            size={{ xs: 128, sm: 92, md: 92, lg: 92, xl: 92, xxl: 92 }}
          ></Avatar>
        </div>{" "}
      </Row> 
      <ProductPrice price={product.price}/>
       <b><ProductName name={product.name}  noMargin={true} /></b>
       <Row justify="center"> 
       <AddButton product={product}  ></AddButton>
      </Row>
    </Col>
  );
};
