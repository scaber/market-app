import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Tag, Tags } from "../../models/tag";
 

const initialState: Tags = {
  tags: [],
};

export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    loadTags: (state, action: PayloadAction<Tag[]>) => {
      state.tags = action.payload.sort((b1, b2) => b2.value - b1.value);
    },
  },
});

export const { loadTags } = tagSlice.actions;

export const getTags = (state: RootState) => state.tag;

export default tagSlice.reducer;
