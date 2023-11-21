import { createSelector } from '@reduxjs/toolkit';

const selectAuth = state => state.auth;
export const selectIsLoading = createSelector(
  selectAuth,
  auth => auth.isLoading
);
export const selectError = createSelector(selectAuth, auth => auth.error);
export const selectUser = createSelector(selectAuth, auth => auth.user);
export const selectIsLoggedIn = createSelector(
  selectAuth,
  auth => auth.isLoggedIn
);
export const selectIsRefreshing = createSelector(
  selectAuth,
  auth => auth.isRefreshing
);
