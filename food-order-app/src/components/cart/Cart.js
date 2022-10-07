import React, { useContext } from "react";
import Modal from "../ui/Modal";
import classes from "./Cart.module.css";
import CartContext from "./../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useState } from "react";
const Cart = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderHandler = (event) => {
    setIsCheckOut(true);
  };

  const orderSubmitHandler = async (userData) => {
    setIsSubmitted(true);
    await fetch(
      "https://react-http-98968-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );
    setDidSubmit(true);
    setIsSubmitted(false);
    cartCtx.clearCart();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModal = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && (
        <Checkout cancelForm={onClose} submitOrder={orderSubmitHandler} />
      )}
      {!isCheckOut && modalActions}
    </>
  );

  const isSubmittingContent = <p>Sending Order</p>;
  const didSubmitContent = (
    <>
      <p>Order Successfully Registered</p>
      <button className={classes.button} onClick={onClose}>
        Close
      </button>
    </>
  );

  return (
    <Modal onClose={onClose}>
      {!isSubmitted && !didSubmit && cartModal}
      {isSubmitted && isSubmittingContent}
      {!isSubmitted && didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
