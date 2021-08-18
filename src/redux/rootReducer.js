import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";

import { authPersistConfig, shopPersistConfig } from "./persist.config";

import commonReducer from "./common/common.reducer";
import shopReducer from "./shop/shop.reducer";
import authReducer from "./auth/auth.reducer";


const rootReducer = combineReducers({
    common: commonReducer,
    shop: persistReducer(shopPersistConfig, shopReducer),
    auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;