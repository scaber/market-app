import { Button, Pagination, PaginationProps } from 'antd'
import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import ArrowLeft from "../../assets/img/arrow-left.svg"
import ArrowRight from "../../assets/img/arrow-right.svg"
import { changePage } from '../../features/product/FiltersSlice';
import "./style.css"


interface Props {
  total: number;
 }


  const PaginationPage:React.FC<Props> = ({total}) => {

  const dispatch = useAppDispatch();
  const updatePage = (page: number ) => dispatch(changePage(page));

   const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
     
    if (type === 'page') {
       return(

          <div>  
                <a>{_}</a>
               
          </div>
      );
    }
      if (type === 'prev') {
      return(

          <div>  
             <Button size='small' icon  >
              <img src={ArrowLeft}/>  
              </Button>
              <span style={{color:"#1EA4CE" ,paddingLeft:"7px", paddingRight:"17px"}}>Prev</span>
          </div>
      );
    }
    if (type === 'next') {
      return (

        <div>  
          <span style={{paddingLeft:"17px",paddingRight:"7px"}}>Next</span>
           <Button size='small' icon >
            <img src={ArrowRight}/>  
            </Button>
            
        </div>
    );
    }
    return originalElement;
  };
  return (
     <> 
     {total && 
     <Pagination style={{ paddingLeft :"26px"}} itemRender={itemRender} showSizeChanger={false} onChange={ updatePage }  defaultPageSize={16} defaultCurrent={1} total={total} />
     }
     </>
        
     
  )
}
export default PaginationPage
