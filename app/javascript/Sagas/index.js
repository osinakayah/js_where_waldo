import { takeLatest, all } from 'redux-saga/effects'
import { GameTypes } from "../AppRedux/gameRedux";

import { checkPositiionSaga } from "./gameSaga";
/* ------------- Connect Types To Sagas ------------- */
export default function * root() {
    yield all([
        takeLatest(GameTypes.GAME_REQUEST, checkPositiionSaga)
    ]);
}
