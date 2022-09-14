export interface ProductModel {
    tags: string[];  
    price: number;
    name: string; 
    description: string;
    slug: string;
    added: number;
    manufacturer: string;
    itemType: string;
    "x-total-count" :number
  }
export interface ListProductModel {
   products:ProductModel[];
   total:number;
  }
  

 