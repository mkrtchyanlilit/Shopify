import { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import OutsideClickHandler from "react-outside-click-handler";
import countShopItems from "./utils/countShopItems.util";
//ASSETS
import { ReactComponent as CrownSVG } from "src/assets/crown.svg";
import { ReactComponent as BagSVG } from "src/assets/shopping-bag.svg";
// COMPONENTS
import CartDropdown from "./components/cart-dropdown/CartDropdown.component";
// ACTIONS
import { clearUserData } from "src/redux/auth/auth.actions";
// STYLES
import styles from "./header.module.scss";

const Header = (props) => {
  const { shopItemsCount, user, clearUserData } = props;
  const history = useHistory();
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const handleClick = () => {
    history.push("/home");
  };

  const toggleCartDropdown = () => setCartIsOpen(!cartIsOpen);

  const handleSignInSignOutClick = () => {
    if (!user) {
      history.push("/auth");
    } else {
      // TODO clear user data
      clearUserData();
    }
  };

  return (
    <header className={styles.container}>
      <CrownSVG className="u-cursor--pointer" onClick={() => history.push("/home")} />
      <nav className={styles.nav}>
        <Link to="/shop" className={styles.link} >
          SHOP
        </Link>
        <Link to="/contacts" className={styles.link}>
          CONTACTS
        </Link>
        <div className={styles.link} onClick={handleSignInSignOutClick}>
          {!user ? "SIGN IN" : "SIGN OUT"}
        </div>
        {user && (
          <OutsideClickHandler
            disabled={!cartIsOpen}
            onOutsideClick={toggleCartDropdown}
          >
            <div className={styles.item}>
              <div className={styles.cart} onClick={toggleCartDropdown}>
                <BagSVG className={styles.bag} />
                {!!shopItemsCount && (
                  <span className={styles.count}>{shopItemsCount}</span>
                )}
              </div>
              {cartIsOpen && <CartDropdown toggleCartDropdown={toggleCartDropdown} />}
            </div>
          </OutsideClickHandler>
        )}
      </nav>
    </header>
  );
};

const mapStateToProps = (store) => ({
  shopItemsCount: countShopItems(store.shop.favorites),
  user: store.auth.user,
});

const mapDispatchToProps = { clearUserData };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
