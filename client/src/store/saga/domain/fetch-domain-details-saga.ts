import { call, put } from "redux-saga/effects";
import { domainApiServices } from "../../../services/domain/domain-api-services";
import { domainActions } from "../../actions/domain/domainActions";
import { isAxiosError } from "axios";

export function* fetchDomainDetailsSaga(action: {
  type: string;
  payload: string;
}) {
  try {
    const response = yield call(
      domainApiServices.getDomainDetails,
      action.payload,
    );

    if (response?.data?.success)
      yield put(domainActions.domainDetailsSucceed(response?.data));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(domainActions.domainDetailsFailed(error.response?.data));
    } else yield put(domainActions.domainDetailsFailed(error));
  }
}
