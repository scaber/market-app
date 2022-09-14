import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import filtersReducer from '../features/product/FiltersSlice';
import brandReducer from '../features/brand/brandSlice';
import tagReducer from '../features/tag/tagSlice';
import basketReducer from '../features/basket/basketSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filters: filtersReducer,
    brand: brandReducer,
    tag: tagReducer,
    basket:basketReducer

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
 