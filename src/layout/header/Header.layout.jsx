import styles from "./header.module.scss";
import { Link, useHistory } from "react-router-dom";

import { ReactComponent as CrownSVG } from "src/assets/crown.svg";
import { ReactComponent as BagSVG } from "src/assets/shopping-bag.svg";

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
  };

  return (
    <header className={styles.container}>
      <CrownSVG className="u-cursor--pointer" onClick={handleClick} />
      <nav className={styles.nav}>
        <Link to="/shop" className={styles.item}>
          SHOP
        </Link>
        <Link to="/contacts" className={styles.item}>
          CONTACTS
        </Link>
        <Link to="/signin" className={styles.item}>
          SIGN IN
        </Link>
        <span className={styles.item}>
          <BagSVG className={styles.bag} />
        </span>
      </nav>
    </header>
  );
};
export default Header;
