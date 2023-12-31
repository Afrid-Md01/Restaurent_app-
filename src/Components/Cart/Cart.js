import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount= `Rs.${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler=id=>{
    cartCtx.removeItem(id);
  }

  const cartItemAddHandler=item=>{
    cartCtx.addItem(item);
  }

  const orderItemsHandler=()=>{
    cartCtx.orderItems();
    alert("Thanks for the order")
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={orderItemsHandler}>Order</button>}
      </div>
    </Modal>
  );
}
