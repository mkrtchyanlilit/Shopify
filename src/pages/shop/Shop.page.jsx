import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import ShopPreview from "./components/shop-preview/ShopPreview.component";
import ShopCategory from "./components/shop-category/ShopCategory.component";
import ShopModalComponent from "src/pages/shop/components/shop-modal/ShopModal.component";
import WithModal from "src/HOCs/with-modal/WithModal.hoc";

import styles from "./shop.module.scss";
import { useDispatch } from "react-redux";
import { setModalState } from "src/redux/shop/shop.actions";

const ShopModal = WithModal(ShopModalComponent);

const Shop = () => {
  const { modalIsShown } = useSelector((store) => store.shop);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Route component={ShopPreview} exact path="/shop" />
      <Route component={ShopCategory} path="/shop/:category" />
      <ShopModal
        isOpen={modalIsShown}
        handleModalClose={() => dispatch(setModalState(false))}
      />
    </div>
  );
};

export default Shop;
