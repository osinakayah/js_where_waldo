import { combineReducers } from 'redux'
import configureSore from './createStore';
import rootSaga from '../Sagas';

export default () => {
    const rootReducer = combineReducers({
        game: require('./gameRedux').reducer
    })

    return configureSore(rootReducer, rootSaga);
}