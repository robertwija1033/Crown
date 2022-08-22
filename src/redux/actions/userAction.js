import UserType from "../types/userType";

export const checkUserSession = () => ({
  type: UserType.CHECK_USER_SESSION,
});

export const googleSignIn = () => ({
  type: UserType.GOOGLE_SIGN_IN_START,
});

export const emailSignIn = (email, password) => ({
  type: UserType.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const signInSuccess = (currentUser) => ({
  type: UserType.SIGN_IN_SUCCESS,
  payload: currentUser,
});

export const signInFailed = (error) => ({
  type: UserType.SIGN_IN_FAILED,
  payload: error,
});

export const signUpStart = (email, password, displayName) => ({
  type: UserType.SIGN_UP_START,
  payload: { email, password, displayName },
});

export const signUpSuccess = (user, additionalDetails) => ({
  type: UserType.SIGN_UP_SUCCESS,
  payload: { user, additionalDetails },
});

export const signUpFailed = (error) => ({
  type: UserType.SIGN_UP_FAILED,
  payload: error,
});

export const signOutStart = () => ({
  type: UserType.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserType.SIGN_OUT_SUCCESS,
});

export const signOutfailed = (error) => ({
  type: UserType.SIGN_OUT_START,
  payload: error,
});
