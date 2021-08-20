import { useSelector } from "react-redux";
import styles from "./empty-data-message.module.scss";

const EmptyDataMessage = (props) => {
  const { children } = props;

  const favorites = useSelector((state) => state.shop.favorites);
  const hasData = !!favorites.length;
  const message = "There is no selected items";
  return hasData ? (
    children
  ) : (
    <div className={styles.container}>
      <div>{message}</div>
    </div>
  );
};

export default EmptyDataMessage;
