import {createStore} from 'redux'

import rootReducer from './reducers/root.reducers'
export const store =  createStore(rootReducer)
