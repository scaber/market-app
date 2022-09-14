import axios, { AxiosResponse } from "axios";  
import { FiltersType } from "../features/product/FiltersSlice";
import { PaginatedResult } from "../models/pagination";
import { ProductModel } from "../models/product";
axios.defaults.baseURL = process.env.REACT_APP_API_URL; 
 

axios.interceptors.response.use(async response => {
       response.data = new PaginatedResult(response.data, parseInt(response.headers["x-total-count"])); 
      return response as AxiosResponse<PaginatedResult<any>>
  
});
const responseBody = (response: AxiosResponse) => response.data;
const queryStringBuilder = (data: FiltersType) => {
    let queryString = Object.entries(data)
      .map((f) => {
        if (typeof f[1] === "object") {
          return f[1].map((tag:any) => `${f[0]}=${tag}`).join("&");
        } 
  
        return `${f[0]}=${f[1]}`;
      })
      .join("&"); 
  
    if (queryString.length !== 0) queryString = "?" + queryString;
  
    return queryString;
  };


const Products = {
  list: (params: FiltersType) =>
    axios
      .get<PaginatedResult<ProductModel[]>>(
        `/items?_limit=16${queryStringBuilder(params)}`
      )
      .then(responseBody),
  listBrands: () =>
    axios.get<string[]>(`/brands`).then(responseBody),
  listTags: () =>
    axios.get<string[]>(`/tags`).then(responseBody),
};  
export default {
  Products  
};
