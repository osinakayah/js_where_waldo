import { call, put, select } from 'redux-saga/effects'
import { postCheckGamePosition } from "../services/gameService";

export function * checkPositiionSaga(action) {
    const { data } = action
    const checkGamePositionResponse = yield call(postCheckGamePosition, data);

    if (checkGamePositionResponse.ok) {
        const responseData = checkGamePositionResponse.data;

        if (responseData.status === "success") {
            alert(responseData.message);
        }
    }
}
