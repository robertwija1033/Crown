import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

const selectUserMemoization = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);

export const userMemoization = createSelector(
  [selectUserMemoization],
  (currentUser) => currentUser
);
