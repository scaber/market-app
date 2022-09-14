 import { Tags } from "../../models/tag";
import tagReducer, { loadTags } from "./tagSlice";

describe("tag reducer", () => {
  const initialState: Tags=  
   {tags:[{
    key: "Tag1",
    value: 100,
  },
  {
    key: "Tag2",
    value: 200,
  },{
    key: "Tag3",
    value: 300,
  },
  {
    key: "Tag4",
    value: 400,
  }]}  
  ;
  it("should handle initial state", () => {
    expect(tagReducer(undefined, {type: 'unknown'})).toEqual({ tags: [] });
  });

  it("should load tags", () => {
    const actual = tagReducer({ tags: [] }, loadTags(initialState.tags));

    expect(actual.tags).toEqual(initialState.tags);
  });
});
