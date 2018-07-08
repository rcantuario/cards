const initialState = {
  products: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      console.log("add prod");
      return {
        ...state,
        products: [...state.products, action.product]
      };

    default:
      return state;
  }
};
