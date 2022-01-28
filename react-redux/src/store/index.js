import rootReducer  from './reducers/root.reducer.js'
// import logger from './middleware/logger'
// import test from './middleware/test'
// import thunk from './middleware/thunk'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/root.saga'
import { createStore,applyMiddleware } from 'redux'
// const store = createStore(rootReducer,applyMiddleware(logger,test,thunk))
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store