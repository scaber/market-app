import React from 'react'; 
import PageHeader from './containers/header/PageHeader';
import ProductDashboard from './containers/dashboard/ProductDashboard';
import { Col, Layout, Row } from 'antd';
import ShoppingCart from './containers/shoppingCart/ShoppingCart';
import SortingFilters from './containers/filters/sorting/SortingFilters';
import BrandFilters from './containers/filters/brand/BrandFilters';
import TagFilters from './containers/filters/tag/TagFilters';
import Footer from './components/Footer';
import { StylesDictionary } from './components/StylesDictionary';
const styles:StylesDictionary = {
  layout:{
    width: "100% !important",
    padding: "0 104px",
    maxWidth: "1440px",
    marginTop: "40px",
     
  },
  col: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa"
  },
  contentLayout:{
     display: "flex",
    justifyContent: "center",
    alignItems: "center", 
  
  } 
};
const App=()=> { 
  return (
    <Layout style={styles.contentLayout}>
      <PageHeader />
      <Layout style={styles.layout}>
        
          <Row  gutter={16}>
          <Col xs={0} sm={0} md={8} lg={8} xl={6}>
            <SortingFilters />
            <BrandFilters />
            <TagFilters />
          </Col>
          <Col sm={18} md={16} lg={16} xl={12}>
            <ProductDashboard/>
          </Col>
          <Col xs={0} sm={0} md={0} lg={0} xl={6}>
            <ShoppingCart />
          </Col>
        </Row>   
      </Layout>
      <Footer/>
    </Layout>
  );
}

export default App;
