const initialState = {
  products: [
    {
      id: 1000,
      name: "Lego Star wars",
      price: 100.0,
      brand: "Lego"
    },
    {
      id: 1001,
      name: "Peppa pig ",
      price: 79.9,
      brand: "Mattel"
    },
    {
      id: 1002,
      name: "Avengers Board game",
      price: 180.85,
      brand: "Disney"
    },
    {
      id: 1003,
      name: "Barbie's Kitchen ",
      price: 92.47,
      brand: "Mattel"
    }
  ]
};

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.product]
      };

    case "LIST_PRODUCT":
      return Object.assign({}, state, { products: initialState.products });

    default:
      return state;
  }
};
