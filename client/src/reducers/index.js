import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./directoryReducer";
import shopReducer from "./shopReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
export default persistReducer(persistConfig, reducers);
