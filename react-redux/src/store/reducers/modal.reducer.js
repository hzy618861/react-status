
import { HIDEMODAL, SHOWMODAL } from '../const/modal.const'
const initState = {
    showStatus:false
  }
 export default function reducer(state=initState,action){
     switch(action.type){
          case SHOWMODAL:
            return {
              ...state, 
              showStatus:true
          }
          case HIDEMODAL:
            return {
              ...state,
              showStatus:false
          }
          default:
            return state
     }
  }
  