import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "src/components/button/Button.component";
import { setModalState } from "src/redux/shop/shop.actions";

import styles from "./shop-modal.module.scss";

const ShopModal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleBackClick = () => {
    dispatch(setModalState(false));
  };

  const goToSignIn = () => {
    dispatch(setModalState(false));
    history.push("/auth");
  };
  return (
    <div className={styles.content}>
      <h1>Oops, Please sign in first.</h1>
      <div>
        <Button onClick={goToSignIn}>Go to Auth</Button>
      </div>
      <Button onClick={handleBackClick}>Close</Button>
    </div>
  );
};

export default ShopModal;
