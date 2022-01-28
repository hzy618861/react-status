import { handleActions as createReducer} from 'redux-actions'
import { addProductToLocalCart,loadCartsToLocal,removeProductToLocalCart } from '../actions/cart.actions'
const initState = []
const handleAddProductToLocalCart = (state,action) =>  {
     //判断是否存在该商品
     //购物车存在 商品数量+1
     const newState = JSON.parse(JSON.stringify(state))
     const product = newState.find(item=>item.id===action.payload.id)
     if(product){
           //商品存在更新数量
           product.count++
     }else{
         //不存在
         newState.push(action.payload)
     }
     return newState 
}
const handleRemoveProductToLocalCart = (state,action) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.splice(action.payload,1)
    return newState
}
const handleLoadCartsToLocal = (state,action) => {
      return action.payload
}
export default createReducer({
    //购物车数据在本地store购物车中
   [addProductToLocalCart]:handleAddProductToLocalCart,
   [removeProductToLocalCart]:handleRemoveProductToLocalCart,
   [loadCartsToLocal]:handleLoadCartsToLocal
},initState)