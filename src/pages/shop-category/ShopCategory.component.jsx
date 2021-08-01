import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import WrapperLoader from "src/components/wrapper-loader/WrapperLoader.component";
import { setGlobalErrorMessage } from "src/redux/common/common.actions";

import ShopItems from "../shop/components/shop-items/ShopItems.component";

const ShopCategory = (props) => {
  const dispatch = useDispatch();
  const [shopItems, setShopItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const category = props.match.params.category;

  useEffect(() => {
    setIsLoading(true);
    axios
        .get(`shop/${category}`)
        .then((result) => {
            setShopItems(result.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error.response);
            dispatch(setGlobalErrorMessage(error.message));
            // setIsLoading(false);
        });
  }, [category]);
  return (
    <WrapperLoader isLoading={isLoading}>
      <ShopItems category={category} data={shopItems} />
    </WrapperLoader>
  );
};

export default ShopCategory;
