import ProductType from "../types/productType";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchProductFailed,
  fetchProductSuccess,
} from "../actions/productAction";
import { getProductsAndDocuments } from "../../utils/firebase";

export function* getProducts() {
  try {
    const productMap = yield call(getProductsAndDocuments);
    yield put(fetchProductSuccess(productMap));
  } catch (error) {
    yield put(fetchProductFailed(error));
  }
}

export function* fetchProduct() {
  yield takeLatest(ProductType.FETCH_PRODUCT_START, getProducts);
}

function* productSaga() {
  yield all([call(fetchProduct)]);
}

export default productSaga;
