import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { ReactComponent as CrownSVG } from "src/assets/crown.svg";
import { ReactComponent as BagSVG } from "src/assets/shopping-bag.svg";

import styles from "./header.module.scss";

const Header = (props) => {
  const { shopItemsCount } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <header className={styles.container}>
      <CrownSVG className="u-cursor--pointer" onClick={handleClick} />
      <nav className={styles.nav}>
        <Link to="/auth" className={styles.item}>
          SHOP
        </Link>
        <Link to="/contacts" className={styles.item}>
          CONTACTS
        </Link>
        <Link to="/auth" className={styles.item}>
          SIGN IN
        </Link>
        <span className={styles.item}>
          <BagSVG className={styles.bag} />
          {shopItemsCount}
        </span>
      </nav>
    </header>
  );
};

const mapStateToProps = (store) => ({
  shopItemsCount: store.shop.favorites.length,
});

export default connect(mapStateToProps)(Header);
