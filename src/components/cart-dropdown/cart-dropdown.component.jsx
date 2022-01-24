import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  // let TotalPrice = 0,
  //   temp = 0;
  // cartItems.forEach((cartItem) => {
  //   temp = cartItem.price * cartItem.quantity;
  //   TotalPrice = TotalPrice + temp;
  // });

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      {/* <div>{isNaN(TotalPrice) ? "" : TotalPrice}</div>*/}
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
