export const addProduct = value => ({
  type: "ADD_PRODUCT",
  product: value
});

export const listProduct = () => ({
  type: "LIST_PRODUCT"
});

export const createProduct = item => ({
  type: "CREATE_PRODUCT",
  product: item
});
