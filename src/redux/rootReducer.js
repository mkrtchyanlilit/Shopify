import { combineReducers } from "redux";
import localStorage from "redux-persist/lib/storage";

import { persistReducer } from "redux-persist";

import commonReducer from "./common/common.reducer";
import shopReducer from "./shop/shop.reducer";
import authReducer from "./auth/auth.reducer";


export const authPersistConfig = {
    key: "auth",
    storage: localStorage,
    whitelist: ["shop"],
    whitelist: ["shop", "auth"],
};

const rootReducer = combineReducers({
    common: commonReducer,
    shop: shopReducer,
    auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;