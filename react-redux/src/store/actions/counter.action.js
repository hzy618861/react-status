// import {DECREMNET,INCREMNET,INCREMNET_ASYNC,DECREMNET_ASYNC} from '../const/counter.const'
import { createAction } from 'redux-actions'
export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const increment_async = createAction('increment_async')
export const decrement_async = createAction('decrement_async')
// export const increment = payload => ({
//     type:INCREMNET,
//     payload
// })
// export const decrement = payload => ({
//     type:DECREMNET,
//     payload
// })
// //redux-saga方式
// export const increment_async = payload => ({
//     type:INCREMNET_ASYNC,
//     payload
// })
// export const decrement_async = payload => ({
//     type:DECREMNET_ASYNC,
//     payload
// })
//redux-thunk
// export const increment_async = payload => dispatch => {
//        setTimeout(()=>{
//         dispatch(increment(payload))
//        },2000)
// }
// export const decrement_async = payload => dispatch => {
//     setTimeout(()=>{
//         dispatch(decrement(payload))
//     },2000)
// }
