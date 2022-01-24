import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

import "./preview-item.styles.scss";

const PreviewItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">₹{price.toFixed(2)}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(PreviewItem);
