import ReactDOM from "react-dom";

import styles from "./shop-modal.module.scss";

const ShopModal = () => {
  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Ooops, Please sign in first.</h1>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default ShopModal;
