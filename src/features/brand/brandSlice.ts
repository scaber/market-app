import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Brands } from "../../models/brand";
import { Brand } from "../../models/brand";
 

const initialState: Brands = {
  brands: [],
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    loadBrands: (state, action: PayloadAction<Brand[]>) => { 
      let brands = [];
      if (action.payload.length > 1) {
        brands = action.payload.sort((b1, b2) => b2.value - b1.value);
      } else {
        brands = action.payload;
      }
      state.brands = brands;
    },
  },
});

export const { loadBrands } = brandSlice.actions;

export const getBrands = (state: RootState) => state.brand;

export default brandSlice.reducer;
