import { call } from "redux-saga/effects";
import { domainApiServices } from "../../../services/domain/domain-api-services";

export function* fetchDomainDetailsSaga(action: {
  type: string;
  payload: string;
}) {
  try {
    const response = yield call(
      domainApiServices.getDomainDetails(action.payload),
    );
    console.log("Te rsponse", response.success);
  } catch (error) {}
}
