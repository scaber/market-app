import {   createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState  } from '../../app/store';
 
export interface FiltersType {
  _sort?: "added" | "price";
  _order?: "asc" | "desc";
  manufacturer?: string[];
  itemType?: string;
  tags_like?: string[];
  _page?: number;
  _limit?:number ; 
}

  const initialState: FiltersType = {}; 


export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    updateFilters:(state,action: PayloadAction<FiltersType>)=>{
        state=action.payload;
        state._page=1;
        return state

    },
    deleteFilter: (
        state,
        action: PayloadAction<"itemType" | "manufacturer" | "tags_like">
      ) => {
        delete state[action.payload];
        state._page = 1;
        return state;
      },
      changePage: (state, action: PayloadAction<number>) => { 
        state._page = action.payload;
        return state;
      },
  }, 
});

export const { updateFilters, deleteFilter, changePage } = filtersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getFilters = (state: RootState) => state.filters;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
 

export default filtersSlice.reducer;

 