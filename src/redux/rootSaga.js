import { all, call } from "redux-saga/effects";
import productSaga from "./saga/productSaga";
import userSagas from "./saga/userSaga";
// import userSaga from "./saga/userSaga";

function* rootSaga() {
  yield all([call(productSaga), call(userSagas)]);
}
export default rootSaga;
