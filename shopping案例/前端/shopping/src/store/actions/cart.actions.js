import {createAction} from 'redux-actions'
//向服务器发请求，告诉服务器要将哪个商品添加到购物车中
export const addProductToCart =  createAction('addProductToCart')
//将商品添加到本地购物车数据中
export const addProductToLocalCart = createAction('addProductToLocalCart') 
//获取购物车数据
export const loadCarts =  createAction('loadCarts')
//购物车数据同步本地
export const loadCartsToLocal = createAction('loadCartsToLocal') 

export const removeProductToCart =  createAction('removeProductToCart')

export const removeProductToLocalCart = createAction('removeProductToLocalCart') 