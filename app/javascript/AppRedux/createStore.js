import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

export default (rootReducer, rootSaga) => {
    const middleware = []
    const enhancers = []

    const sagaMonitor = null;
    const sagaMiddleware = createSagaMiddleware({sagaMonitor});

    middleware.push(sagaMiddleware);
    enhancers.push(applyMiddleware(...middleware));


    const store = createStore(rootReducer, compose(...enhancers))

    sagaMiddleware.run(rootSaga);

    return store;
}