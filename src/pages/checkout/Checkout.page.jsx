import { useSelector } from "react-redux";
import TableRow from "./table-row/TableRow.component";
import styles from "./checkout.module.scss";
import Button from "src/components/button/Button.component";

import totalPrice from "./utils/totalPrice";
import EmptyDataMessage from "src/components/empty-data-message/EmptyDataMessage.component";

const Checkout = () => {
  const favorites = useSelector((state) => state.shop.favorites);

  return (
    <div className={styles.container}>
      <h1>Process your checkout</h1>

      <EmptyDataMessage message="There is no selected items" hasData={favorites.length}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((rowData) => (
              <TableRow rowData={rowData} />
            ))}
          </tbody>
        </table>
        <div className={styles.bottom}>
          <div className={styles.total}>TOTAL: ${totalPrice(favorites)}</div>
          <Button>Pay Now</Button>
        </div>
      </EmptyDataMessage>
    </div>
  );
};

export default Checkout;
