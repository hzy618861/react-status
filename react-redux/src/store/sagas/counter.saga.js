import {takeEvery,put, delay} from 'redux-saga/effects'
import { increment } from '../actions/counter.action'
// import { INCREMNET_ASYNC } from '../const/counter.const'
import {increment_async} from '../actions/counter.action'
//takeEvery接受action
//put触发action
function* increment_async_fn(action){
    yield delay(1000)
    yield put(increment(action.payload))
}

export default function* counterSaga(){
    //  yield takeEvery(INCREMNET_ASYNC,increment_async_fn) 
     yield takeEvery(increment_async,increment_async_fn) 
}