import { call, put } from "redux-saga/effects";
import { AuthApiServices } from "../../../services/auth/auth-api-services";
import { authActions } from "../../actions/auth/auth-actions";
import { isAxiosError } from "axios";

export function* loginUserSaga(action: { type: string; payload: string }) {
  try {
    const response = yield call(AuthApiServices.loginUser, action?.payload);
    if (response?.success) yield put(authActions.loginUserSucced(response));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(authActions.loginUserFailed(error.response?.data));
    } else yield put(authActions.loginUserFailed(error));
  }
}
