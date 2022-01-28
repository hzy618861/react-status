
import {takeEvery,put} from 'redux-saga/effects'
import {loadProducts,saveProducts} from '../actions/product.action'
import axios from 'axios'
//获取商品数据
function* handdleLoadProducts(){
   const {data} =   yield axios.get('http://localhost:3005/goods')
   //商品列表保存本地store
   yield put(saveProducts(data))
}
export default function* productSaga(){
    //加载商品列表
   yield takeEvery(loadProducts,handdleLoadProducts)
}