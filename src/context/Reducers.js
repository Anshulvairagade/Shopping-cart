export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.id
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "FILTER_BY_WATCH":
      return { ...state, isWatch: action.payload };
    case "FILTER_BY_PHONE":
      return { ...state, isPhone: action.payload };
    case "FILTER_BY_LAPTOP":
      return { ...state, isLaptop: action.payload };
      case "FILTER_BY_WIRELESS":
      return { ...state, isWireless: action.payload };
      case "FILTER_BY_TV":
        return { ...state, isWireless: action.payload };

    case "CLEAR_FILTERS":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
        isWatch: false,
        isPhone: false,
        isLaptop: false,
        isWireless: false, 
        isTv: false
      };
    default:
      return state;
  }
};
