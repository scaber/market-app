 import filterReducer, {
  updateFilters,
  deleteFilter,
  changePage,
  FiltersType,
} from "./FiltersSlice";

describe("filter reducer", () => {
  const initialState: FiltersType = {
    _sort: "added",
    _order: "asc",
    manufacturer: ["ABC"],
    itemType: "XYZ",
    tags_like: ["tag1"],
    _page: 2,
  };
  it("should handle initial state", () => {
    expect(filterReducer(undefined, { type: 'unknown' })).toEqual({ _limit  : 16});
  });

  it("should update filters", () => {
    const actual = filterReducer({}, updateFilters(initialState));
    expect(actual).toEqual(initialState);
  });

  it("should delete filters key", () => {
    const actual = filterReducer(initialState, deleteFilter("itemType"));
    expect(actual).not.toEqual(initialState);
  });

  it("should change page", () => {
    const actual = filterReducer(initialState, changePage(33));
    expect(actual._page).toEqual(33);
  });
});
