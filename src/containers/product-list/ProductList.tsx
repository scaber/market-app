import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getFilters } from '../../features/product/FiltersSlice';
import { ProductModel } from '../../models/product';
 import agent from '../../api/agent';
import {    Row } from 'antd';
 import { Product   } from '../product/Product';
import { PaginatedResult } from '../../models/pagination';
import  PaginationPage from '../pagination/PaginationPage';
import { getBrands, loadBrands } from '../../features/brand/brandSlice';
import { getTags, loadTags } from '../../features/tag/tagSlice';
import { StylesDictionary } from '../../components/StylesDictionary';

const styles:StylesDictionary  = {
    row: {
        width: "100%",
        backgroundColor:" #ffffff",
        padding: "20px 9px",
        marginLeft:" 0px !important",
        marginRight: "0px !important",
      
    },  
  } ;
  let dummyImage= "https://picsum.photos/200/300?random=";
  const ProductList = () => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector(getFilters);
    const brands = useAppSelector(getBrands);
    const tags = useAppSelector(getTags);

    const [products, setProducts] = useState<ProductModel[]>([]);
    const [pageTotal, setPageTotal] = useState<number>(0);
  
   
    useEffect(() => {  
        agent.Products.list(filters).then(
          (res: PaginatedResult<ProductModel[]>) => {
            if(res && res.data){
              setProducts(res.data);
              setPageTotal(res.pagination);
            }  
          }
        );
      if (brands.brands.length === 0) {
        agent.Products.listBrands().then((res: any) => { 
          dispatch(loadBrands(res.data));
        });
      }
      if (tags.tags.length === 0) {
        agent.Products.listTags().then((res: any) => {  
          dispatch(loadTags(res.data));
        });
        
      } 
    }, [filters])
   return (
    <>
      <Row style={styles.row} gutter={[24, 20]}>
        {products &&
          products.map((i: ProductModel, x: number) => { 
             return(  <Product key={x} product={i} dummyImage={dummyImage+x} />)
          }
          
          )}
      </Row>
      <Row style={{marginTop:"32px"}}>
      {products &&
        <PaginationPage total={pageTotal===0?1:pageTotal} />
      }
      </Row>
    </>
  );
}
export default ProductList;
