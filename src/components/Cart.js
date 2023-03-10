import React, { useEffect, useState } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  FormControl,
  Image,
} from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  const [show, setShow] = useState(false);
  
  const showCheckOut = () => {
    setShow(true)
  }
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroupItem key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  {" "}
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}> ₹ {prod.price}</Col>
                <Col md={2}>
                  {" "}
                  <Rating rating={prod.ratings}></Rating>
                </Col>
                <Col md={2}>
                  <FormControl
                    as="select"
                    value={prod.qty}
                    onChange={(e) => dispatch({ type: 'CHANGE_CART_QTY', payload: { ...prod, qty: e.target.value}})}
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </FormControl>
                </Col>
                <Col md={2}>
                  <AiFillDelete
                    fontSize="20px"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                    }
                  />
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeigth: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0} onClick={()=>showCheckOut()}>
          Proceed to Checkout
        </Button>
        {
          show ? <h3 style={{marginTop: 20, fontWeight: 300}}>Thanks for shopping </h3> : null
        }
      </div>
    </div>
  );
};

export default Cart;
