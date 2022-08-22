import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer
});

export default rootReducer;
