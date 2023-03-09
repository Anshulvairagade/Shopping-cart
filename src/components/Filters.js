import React, { useState, useRef } from "react";
import { CartState } from "../context/Context";
import { Form, Button } from "react-bootstrap";
import Rating from "./Rating";
import "./style.css";

const Filters = () => {
 

  const {
    productState: { byStock, byRating, sort, byFastDelivery, isWatch, isPhone, isLaptop , isWireless, isTv},
    productDispatch
  } = CartState();
  // console.log(byStock, byRating, sort, byFastDelivery, isWatch);
  // console.log(isWatch);
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => {
            productDispatch({ type: 'SORT_BY_PRICE', payload: 'lowToHigh' })
          }}
          checked={ sort==="lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() => {
            productDispatch({type:'SORT_BY_PRICE', payload:'highToLow'})
          }}
          checked={ sort==="highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() => {
            productDispatch({type:'FILTER_BY_STOCK'})
          }}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast delivery only"
          name="group1"
          type="checkbox"
          id={`inline-1`}
          onChange={() => {
            productDispatch({type:'FILTER_BY_DELIVERY'})
          }}
          checked={byFastDelivery}
        />
      </span>
      <span className="title" style={{fontSize: 26}}>Categories</span>
      <span>
        <Form.Check
          inline
          label="Smart Watch"
          name="group1"
          type="checkbox"
          id={`inline-1`}
          onChange={(e) => {
            productDispatch({type:'FILTER_BY_WATCH', payload: e.target.checked})
          }}
          checked={isWatch && isWatch}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Phones"
          name="group1"
          type="checkbox"
          id={`inline-1`}
          onChange={(e) => {
            productDispatch({type:'FILTER_BY_PHONE', payload: e.target.checked})
          }}
          checked={isPhone}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Laptop"
          name="group1"
          type="checkbox"
          id={`inline-1`}
          onChange={(e) => {
            productDispatch({type:'FILTER_BY_LAPTOP', payload:  e.target.checked})
          }}
          checked={isLaptop}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="True Wireless"
          name="group1"
          type="checkbox"
          id={`inline-1`}
          onChange={(e) => {
            productDispatch({type:'FILTER_BY_WIRELESS', payload:  e.target.checked})
          }}
          checked={isWireless}
        />
      </span>
      {/* <span>
        <Form.Check
          inline
          label="Tv's"
          name="group1"
          type="checkbox"
          id={`inline-1`}
          onChange={(e) => {
            productDispatch({type:'FILTER_BY_TV', payload:  e.target.checked})
          }}
          checked={isTv}
        />
      </span> */}
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          whenClick={(i) => {
            productDispatch({ type: "FILTER_BY_RATING", payload: i + 1 });
          }}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button variant="light" onClick={()=>productDispatch({type:'CLEAR_FILTERS'})}>Clear Filters</Button>
    </div>
  );
};

export default Filters;
