import React from "react";
import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./style.css";

const Home = () => {
  const {
    state: { products },
    productState: {
      sort,
      byStock,
      byFastDelivery,
      byRating,
      searchQuery,
      isWatch,
      isPhone,isLaptop, isWireless,isTv
    },
  } = CartState();
  // console.log(products);

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (isWatch) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.categorie.toLowerCase().includes("smartwatch")
      );
      // console.log('show only smart watches')
    }
    if (isTv) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.categorie.toLowerCase().includes("tv")
      );
      // console.log('show only smart watches')
    }
    if (isWireless) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.categorie.toLowerCase().includes("true wireless")
      );
      // console.log('show only smart watches')
    }
    if (isPhone) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.categorie.toLowerCase().includes("phones")
      );
      // console.log('show only smart watches')
    }
    if (isLaptop) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.categorie.toLowerCase().includes("laptop")
      );
      // console.log('show only smart watches')
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />

      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
