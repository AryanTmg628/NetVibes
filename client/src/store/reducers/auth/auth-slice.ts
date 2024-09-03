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
      console.log("OK");
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
  },
});

export const authReducer = authSlice.reducer;
export default authSlice;
