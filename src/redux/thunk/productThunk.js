const productThunk = () => async (dispatch) => {
  dispatch(fetchProductStart());
  try {
    const productMap = await getProductsAndDocuments();
    dispatch(fetchProductSuccess(productMap));
  } catch (error) {
    dispatch(fetchProductFailed(error));
  }
};

export default productThunk;
