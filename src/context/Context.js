import React, { createContext, useContext, useEffect, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";
import { products } from "../products";
const Cart = createContext();

// faker.seed(99);

const getLocalData = () => {
  const data = localStorage.getItem("data");
  if (data) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

const Context = ({ children }) => {
  // const products = [...Array(20)].map(() => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   image: faker.image.nature(600, 500, true),
  //   inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
  //   fastDelivery: faker.datatype.boolean(),
  //   ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  // }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: getLocalData(),
  });

  
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state.cart));
  }, [state.cart]);

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
    
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
