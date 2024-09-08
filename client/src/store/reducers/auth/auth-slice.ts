import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  success: null,
  currentUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser(state, action) {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    registerUserSucceed(state, action) {
      state.loading = false;
      state.error = null;
      state.success = action?.payload;
    },
    registerUserFailed(state, action) {
      state.loading = false;
      state.success = null;
      state.error = action?.payload;
    },
    verifyAccount(state, action) {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    verifyAccountSucceed(state, action) {
      state.loading = false;
      state.error = null;
      state.success = action?.payload;
    },
    verifyAccountFailed(state, action) {
      state.loading = false;
      state.error = action?.payload;
      state.success = null;
    },
    loginUser(state, action) {
      state.loading = true;
      state.error = null;
      state.success = null;
    },
    loginUserSucced(state, action) {
      state.loading = false;
      state.error = null;
      state.success = action?.payload;
    },
    loginUserFailed(state, action) {
      state.loading = false;
      state.success = null;
      state.error = action?.payload;
    },
    setCurrentUser(state, action) {
      state.currentUser = action?.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export default authSlice;
