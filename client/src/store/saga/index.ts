import { takeLatest, all } from "redux-saga/effects";
import { domainActions } from "../actions/domain/domainActions";
import { fetchDomainDetailsSaga } from "./domain/fetch-domain-details-saga";
import { authActions } from "../actions/auth/auth-actions";
import { registerUserSaga } from "./auth/register-user-saga";

export function* rootSaga() {
  yield all([
    takeLatest(domainActions.fetchDomainDetails, fetchDomainDetailsSaga),
    takeLatest(authActions.registerUser, registerUserSaga),
  ]);
}
