// import {DECREMNET,INCREMNET} from '../const/counter.const'
import {handleActions as createReducer} from 'redux-actions'
import {increment,decrement} from '../actions/counter.action'
const initState = {
    count: 0
  }
  function handleIncrement(state,count){
     return {
       count:state.count+1
     }
  }
  function handleDecrement(state,count){
    return {
      count:state.count-1
    }
 }
  export default createReducer({
       [increment]: handleIncrement,
       [decrement]: handleDecrement,
  },initState)
//  export default function reducer(state=initState,action){
//      switch(action.type){
//           case INCREMNET:
//             return {
//               ...state,
//               count:state.count+action.payload
//            }
//           case DECREMNET:
//             return {
//               ...state,
//               count:state.count-action.payload
//           }
//           default:
//             return state
//      }
//   }
  