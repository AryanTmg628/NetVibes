import { call, put } from "redux-saga/effects";
import { AuthApiServices } from "../../../services/auth/auth-api-services";
import { authActions } from "../../actions/auth/auth-actions";
import { isAxiosError } from "axios";

export function* registerUserSaga(action: { type: string; payload: string }) {
  try {
    const response = yield call(AuthApiServices.registerUser, action?.payload);
    if (response?.success) yield put(authActions.registerUserSucceed(response));
  } catch (error) {
    if (isAxiosError(error)) {
      yield put(authActions.registerUserFailed(error.response?.data));
    } else yield put(authActions.registerUserFailed(error));
  }
}
