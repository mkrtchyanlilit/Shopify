import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "src/components/button/Button.component";

import styles from "./cart-dropdown.module.scss";

const CartDropdown = (props) => {
  const { shopItems, toggleCartDropdown } = props;
  const history = useHistory();

  const handleCheckOutClick = () => {
      history.push("/checkout");
      toggleCartDropdown();
  };
  return (
    <div className={styles.container}>
      {shopItems.length ? (
        <>
          <div className={styles.itemsWrapper}>
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
          <Button onClick={handleCheckOutClick}>Go to checkout</Button>
        </>
      ) : (
        <div className={styles.emptyWrapper}>
          <div>Empty</div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (store) => ({
  shopItems: store.shop.favorites,
});

export default connect(mapStateToProps)(CartDropdown);
