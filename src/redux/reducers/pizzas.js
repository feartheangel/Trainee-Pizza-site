const initialState = {
  items: [],
};

const pizzas = (state = initialState, action) => {
  if (action.type === "SET_PIZZAS") {
    return {
      ...state,
      items: action.payload,
      isLoaded: false,
    };
  }
  return state;
};

export default pizzas;
