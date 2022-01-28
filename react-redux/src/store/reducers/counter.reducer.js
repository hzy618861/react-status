import {DECREMNET,INCREMNET} from '../const/counter.const'
const initState = {
    count: 0,

  }
 export default function reducer(state=initState,action){
     switch(action.type){
          case INCREMNET:
            return {
              ...state,
              count:state.count+action.payload
           }
          case DECREMNET:
            return {
              ...state,
              count:state.count-action.payload
          }
          default:
            return state
     }
  }
  