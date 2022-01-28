import {DECREMNET,INCREMNET} from '../const/counter.const'
export const increment = payload => ({
    type:INCREMNET,
    payload
})
export const decrement = payload => ({
    type:DECREMNET,
    payload
})