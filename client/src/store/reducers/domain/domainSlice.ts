import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  loading: false,
  queryDomain: null,
  domainDetails: null,
  tldsList: [],
  registerDomainDetails: null,
};

export const domainSlice = createSlice({
  name: "domain",
  initialState,
  reducers: {
    fetchDomainDetails(state, action) {
      state.loading = true;
    },
    domainDetailsSucceed(state, action) {
      state.error = false;
      state.loading = false;
      state.domainDetails = action?.payload;
    },
    domainDetailsFailed(state, action) {
      state.error = action?.payload;
      state.loading = false;
      state.domainDetails = null;
    },
    setQueryDomain(state, action) {
      state.queryDomain = action?.payload;
    },
    resetQueryDomain(state) {
      state.queryDomain = null;
    },
    fetchTLDLists(state) {
      state.loading = true;
    },
    TLDsListSucceed(state, action) {
      state.error = false;
      state.loading = false;
      state.tldsList = action?.payload;
    },
    TLDsListFailed(state, action) {
      state.error = action?.payload;
      state.loading = false;
      state.tldsList = [];
    },
    setRegisterDomainDetails(state, action) {
      state.registerDomainDetails = action?.payload;
    },
  },
});

const domainReducer = domainSlice.reducer;
export default domainReducer;
