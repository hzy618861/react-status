import {createAction} from 'redux-actions'
//获取商品列表数据
export const loadProducts = createAction('load products')
//服务器数据保存到store中
export const saveProducts = createAction('save products') 