import {takeEvery,put, delay} from 'redux-saga/effects'
import { show } from '../actions/modal.action'
import { SHOWMODAL_ASYNC } from '../const/modal.const'
function* show_async_fn(action){
    yield delay(1000)
    yield put(show())
}
export default function* modalSaga(){
     yield takeEvery(SHOWMODAL_ASYNC,show_async_fn) 
}