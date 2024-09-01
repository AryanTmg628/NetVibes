import { takeLatest, all } from "redux-saga/effects";
import { domainActions } from "../actions/domain/domainActions";
import { fetchDomainDetailsSaga } from "./domain/fetch-domain-details-saga";

export function* rootSaga() {
  yield all([
    takeLatest(domainActions.fetchDomainDetails, fetchDomainDetailsSaga),
  ]);
}
