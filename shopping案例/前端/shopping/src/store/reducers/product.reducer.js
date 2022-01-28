import { handleActions as createReducer} from 'redux-actions'
import { saveProducts } from '../actions/product.action'
const initState = []
const handleSaveProducts = (state,action) =>  action.payload
export default createReducer({
    //商品列表保存在本地store中
   [saveProducts]:handleSaveProducts
},initState)