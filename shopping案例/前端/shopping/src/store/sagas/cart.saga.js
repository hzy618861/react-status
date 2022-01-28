
import {takeEvery,put} from 'redux-saga/effects'
import axios from 'axios'
import { addProductToCart, addProductToLocalCart,loadCarts,loadCartsToLocal,removeProductToCart,removeProductToLocalCart } from '../actions/cart.actions'
 //商品添加购物车
function* handleAdProductToCart(action){
   const {data} =   yield axios.post('http://localhost:3005/cart/add',{gid:action.payload})
   //购物车数据保存本地store
   yield put(addProductToLocalCart(data))
}
function* handleRemoveProductToCart(action){
   const {data} =   yield axios.delete('http://localhost:3005/cart/delete',{
      params:{cid:action.payload}
   })
   yield put(removeProductToLocalCart(data.index))
}
function* handleLoadCarts(action){
   const {data} =   yield axios.get('http://localhost:3005/cart')
   yield put(loadCartsToLocal(data))
}
export default function* cartSaga(){
    //商品添加购物车
   yield takeEvery(addProductToCart,handleAdProductToCart)
   yield takeEvery(removeProductToCart,handleRemoveProductToCart)
   yield takeEvery(loadCarts,handleLoadCarts)
}