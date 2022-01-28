import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleWare from 'redux-saga'
import rootReducer from './reducers/root.reducers'
import rootSaga from './sagas/root.saga'
const sagaMiddleWare = createSagaMiddleWare()
export const store =  createStore(rootReducer,applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(rootSaga)
