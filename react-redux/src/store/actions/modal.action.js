import {SHOWMODAL,HIDEMODAL,SHOWMODAL_ASYNC} from '../const/modal.const'
export const show = payload => ({
    type:SHOWMODAL
})
export const hide = payload => ({
    type:HIDEMODAL
})

export const show_async = payload => ({
    type:SHOWMODAL_ASYNC
})



