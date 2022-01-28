import counterSaga from './counter.saga'
import modalSaga from './modal.saga'
import {all} from 'redux-saga/effects'
export default function* rootSaga(){
    yield all([counterSaga(),modalSaga()])
}