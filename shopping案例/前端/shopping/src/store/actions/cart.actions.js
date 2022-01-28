import {createAction} from 'redux-actions'
//向服务器发请求，告诉服务器要将哪个商品添加到购物车中
export const addProductToCart =  createAction('addProductToCart')
//将商品添加到本地购物车数据中
export const addProductToLocalCart = createAction('addProductToLocalCart') 
//获取购物车数据
export const loadCarts =  createAction('loadCarts')
//购物车数据同步本地
export const loadCartsToLocal = createAction('loadCartsToLocal') 

//删除服务端商品
export const removeProductToCart =  createAction('removeProductToCart')
//删除store中的数据
export const removeProductToLocalCart = createAction('removeProductToLocalCart') 

//更新服务端商品数量
export const changeServerProductNumber =  createAction('changeServerProductNumber')
//更新store中的数据
export const changeLocalProductNumber = createAction('changeLocalProductNumber') 