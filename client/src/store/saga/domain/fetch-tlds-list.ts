import { call, put } from "redux-saga/effects";
import { domainApiServices } from "../../../services/domain/domain-api-services";
import { domainActions } from "../../actions/domain/domainActions";
import { isAxiosError } from "axios";

export function* fetchTLDsListSaga() {
  try {
    const response = yield call(domainApiServices.getTLDsLIst);

    if (response?.data?.success)
      yield put(domainActions.TLDsListSucceed(response?.data?.data));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(domainActions.TLDsListFailed(error.response?.data));
    } else yield put(domainActions.TLDsListFailed(error));
  }
}
