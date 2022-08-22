const userThunk = () => async (dispatch) => {
  dispatch(fetchUserStart());
  try {
    const unsubscribe = onAuthStateChangedLister((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(fetchUserSuccess(user));
    });
  } catch (error) {
    dispatch(fetchUserFailed(error));
  }
};

export default userThunk;
