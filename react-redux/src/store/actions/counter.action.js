import {DECREMNET,INCREMNET,INCREMNET_ASYNC,DECREMNET_ASYNC} from '../const/counter.const'
export const increment = payload => ({
    type:INCREMNET,
    payload
})
export const decrement = payload => ({
    type:DECREMNET,
    payload
})
//redux-saga方式
export const increment_async = payload => ({
    type:INCREMNET_ASYNC,
    payload
})
export const decrement_async = payload => ({
    type:DECREMNET_ASYNC,
    payload
})
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
