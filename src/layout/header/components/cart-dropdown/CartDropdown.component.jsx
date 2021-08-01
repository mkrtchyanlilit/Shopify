import React from "react";
import { connect } from "react-redux";

import styles from "./cart-dropdown.module.scss";

const CartDropdown = (props) => {
  const { shopItems } = props;
  return (
    <div className={styles.container}>
      {shopItems.map((shopItem) => {
        return (
          <div key={shopItem._id} className={styles.cartItem}>
            <img
              className={styles.image}
              src={shopItem.imageUrl}
              alt="cart-item"
            />

            <div>
              <div>{shopItem.name}</div>
              <div>
                {shopItem.count} X ${shopItem.price}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (store) => ({
  shopItems: store.shop.favorites,
});

export default connect(mapStateToProps)(CartDropdown);
