import UserType from "../types/userType";

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = USER_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserType.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case UserType.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case UserType.SIGN_IN_FAILED:
    case UserType.SIGN_UP_FAILED:
    case UserType.SIGN_OUT_FAILED:
      return { ...state, error: payload, isLoading: false };

    default:
      return state;
  }
};

export default userReducer;
