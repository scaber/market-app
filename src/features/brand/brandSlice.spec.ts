import { Brands } from "../../models/brand";
 
import brandReducer, { loadBrands } from "./brandSlice";

describe("brand reducer", () => {
  const initialState: Brands =  
    {
      brands: [{
        key: "Brand1",
        value: 100,
      }
      ]
    } 
   ;
  it("should handle initial state", () => {
    expect(brandReducer(undefined, { type: 'unknown' })).toEqual({ brands: [] });
  });

  it("should load brands", () => {
    const actual = brandReducer(
      { brands: [] },
      loadBrands(initialState.brands)
    );

    expect(actual.brands).toEqual(initialState.brands);
  });
});
