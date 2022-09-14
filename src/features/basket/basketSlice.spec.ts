 import { BasketType } from "../../models/basket";
import { ProductModel } from "../../models/product";
import basketReducer, {
  addItemToBasket,
  reduceItemFromBasket,
} from "./basketSlice";

describe("basket reducer", () => {
  const initialState: BasketType = { items: [] };
  const item: ProductModel = {
    tags: ["tag1", "tag2"],
    price: 123,
    name: "A Product",
    description: "description",
    slug: "a-product",
    added: 12321321,
    manufacturer: "A Co.",
    itemType: "mug",
    "x-total-count":1700
  };
  it("should handle initial state", () => {
    expect(basketReducer(undefined, { type: 'unknown' })).toEqual({ items: [] });
  });

  it("should add item to basket", () => {
    const actual = basketReducer(initialState, addItemToBasket(item));

    expect(actual.items[0].item).toEqual(item);
  });

  it("should remove item from basket", () => {
    const actual = basketReducer(
      { items: [{ count: 1, item: item }] },
      reduceItemFromBasket(item)
    );

    expect(actual.items).toEqual([]);
  });
});
