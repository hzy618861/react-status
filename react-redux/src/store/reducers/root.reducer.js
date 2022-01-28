import {combineReducers} from 'redux'
import CounterReducer from './counter.reducer'
import modalReducer from './modal.reducer'
//{counter:{count:0},modal:{show:false} }
export default combineReducers({
    counter:CounterReducer,
    modal:modalReducer
})