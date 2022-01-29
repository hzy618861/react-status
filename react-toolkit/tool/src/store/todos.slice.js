import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const TODOS_FEATURE_KEY = 'todos'

export const loadTodos = createAsyncThunk("todos/loadTodos",(payload,thunkAPI)=>{
    axios.get(payload).then(res=> thunkAPI.dispatch(setTodos(res.data)))
})
const {reducer:TodosReducer,actions} = createSlice({
    name:TODOS_FEATURE_KEY,
    initialState:[],
    reducers:{
        // addTodo:(state,action)=> {
        //      state.push(action.payload)
        // },
       addTodo:{
           reducer:(state,action)=> {
              state.push(action.payload)
           },
           prepare:todo => {
                 return {
                     payload:{id:Math.random(),...todo}
                 }
           }
       },
       setTodos:(state,action)=> {
          action.payload.forEach(todo=>state.push(todo))
       },

       
    }
})
export const {addTodo,setTodos} = actions
export default TodosReducer
