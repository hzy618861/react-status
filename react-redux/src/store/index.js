import rootReducer  from './reducers/root.reducer.js'
import { createStore } from 'redux'
const store = createStore(rootReducer)
export default store