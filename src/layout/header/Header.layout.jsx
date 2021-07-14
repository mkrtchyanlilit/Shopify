import styles from "./header.module.scss";
import { ReactComponent as CrownSVG } from "../../assets/crown.svg";

const Header = () => {
    return (
        <header className={styles.container}>
            <CrownSVG />
            <nav>NAV ITEMS</nav>
        </header>
    );
};

export default Header;