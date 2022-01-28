import {SHOWMODAL,HIDEMODAL} from '../const/modal.const'
export const show = payload => ({
    type:SHOWMODAL
})
export const hide = payload => ({
    type:HIDEMODAL
})
