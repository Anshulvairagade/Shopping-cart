import React from "react";
import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import './style.css'

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card style={{height: "100%"}}>
        <Card.Img variant="top" src={prod.image} alt={prod.name}style={{height: "60%", objectFit:'cover'}} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div >Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.find((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: prod })
              }
              className="btn"
            >
              Remove from Cart
            </Button>
          ) : (
            <Button disabled={!prod.inStock} onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: prod })
            }>
              {prod.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
