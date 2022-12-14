import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.addCart);
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.img}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return(
        <div className="px-4 my-5 bg-light rounded-3" >
        <div className="container py-4">
        <div className="row justify-content-center">
        <h3>Your Cart is Empty</h3>
        </div>
        </div>
        </div>
    )
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </div>
  );
};

export default Cart;
