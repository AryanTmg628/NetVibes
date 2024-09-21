import { takeLatest, all } from "redux-saga/effects";
import { domainActions } from "../actions/domain/domainActions";
import { fetchDomainDetailsSaga } from "./domain/fetch-domain-details-saga";
import { authActions } from "../actions/auth/auth-actions";
import { registerUserSaga } from "./auth/register-user-saga";
import { verifyAccountSaga } from "./auth/verify-account-saga";
import { loginUserSaga } from "./auth/login-user-saga";
import { fetchTLDsListSaga } from "./domain/fetch-tlds-list";

export function* rootSaga() {
  yield all([
    takeLatest(domainActions.fetchDomainDetails, fetchDomainDetailsSaga),
    takeLatest(domainActions.fetchTLDLists, fetchTLDsListSaga),
    takeLatest(authActions.registerUser, registerUserSaga),
    takeLatest(authActions.verifyAccount, verifyAccountSaga),
    takeLatest(authActions.loginUser, loginUserSaga),
  ]);
}
