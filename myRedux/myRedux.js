/**
 createStore(reducer,preloadedState,enhancer) 創建store對象
 enhancer对store功能增强，必须是一个函数，返回一个函数
 返回一个对象{getSstate,dispatch,subscribe}
 */
//redux中间件就是对dispatch方法增强，applyMiddleWare,让多个中间件按照顺序执行
//applyMiddleWare是内置的enhancer函数
//是否参数是否对象

//bindActionCreators接收action函数会帮助我们生成下述对象 bindActionCreators(actions对象,dispatch)
//actions函数
/**
 * function incremnet(){return {type:"increment"} }
 * 
 */
//{
    // incremnet(){
    //     dispatch({type:"increment"})
    // },
    // decrement(){
    //     dispatch({type:"decrement"})
    // },
//}

/**
 * 
 * combineReducers({counter}) 合并reducer
 */
function combineReducers(reducers){
      for(let key in reducers){
            const fn = reducers[key]
            if(typeof fn !='function'){
                 throw new Error('reducer必须是函数')
            }
      }
      //返回一个合并的reducer
      return function(state,action){
        const obj = {}
        for(let key in reducers){
            const fn = reducers[key]
            //state[key]为旧的状态
            obj[key] = fn(state[key],action)
        }
        console.log(obj)
        return obj
      }
}
function bindActionCreators(actionCreators,dispatch){
    let  boundActionCreators = {}
    for(let key in actionCreators){
        boundActionCreators[key] = function() {
            dispatch(actionCreators[key]()) 
        }
    }
    return boundActionCreators
}
function isPlainObject(obj){
     if(typeof obj !='object' ||obj===null ){
         return false
     }
     let proto = obj
     //区分数组对象 原型对象对比，与顶层原型判断是否相同
     while(Object.getPrototypeOf(proto)!=null){
        proto = Object.getPrototypeOf(proto)
     }
     //当前的原型与顶层原型是否相等
     return  Object.getPrototypeOf(obj)===proto
}
function applyMiddleware(...middlewares){
     return function(createStore){
           return function(reducer,preloadedState){
                 //创建store,给中间件传递参数
                 let store = createStore(reducer,preloadedState)
                 //阉割版的store 中间件第一层函数的参数
                 let middlewareApi = {
                     getState:store.getState,
                     dispatch:store.dispatch
                 }
                 //调用中间件第一层函数,传递参数
                const chain = middlewares.map(middleware => middleware(middlewareApi))
                const dispatch = compose(chain)(store.dispatch)
                return {
                    //返回增强版store
                    ...store,
                    dispatch  //用户调用dispatch时候会先调logger里面的函数，logger里层调用next，也就是thunk里面函数，thunk中next为真是的disptach函数，最终调用reducer函数
                }
           }
     }
}
function compose(chain){
      return function(dispatch){
            for(let i=chain.length-1;i>=0;i--){
                dispatch = chain[i](dispatch)  //保存next 第一次为dispatch 第二次为thunk,第三次为logger(里层函数)
            }
            return dispatch
      }
}
function createStore(reducer,preloadedState,enhancer){
    let currentState = preloadedState  //保存store初始化状态
    const currentListeners = [] //存放订阅者函数

    //参数约束校验，reducer必须是函数
    if(typeof reducer!=='function') throw new Error('reducer必须是函数')
    if(typeof enhancer!=='undefined'){
         if(typeof enhancer!=='function'){
            throw new Error('enhancer必须是函数')
         }
         //调用者自己创建store
         return enhancer(createStore)(reducer,preloadedState)
    }

    //获取状态
    function getState(){
         return currentState
    }
    //触发action
    function dispatch(action){
        //action必须是对象，具有type属性
        if(!isPlainObject(action))  throw new Error('action必须是对象')
        if(typeof action.type === 'undefined') throw new Error('action必须要有type属性')
        //reducer函数计算出最新状态，传入当前状态已经action
        currentState = reducer(currentState,action)
        //状态改变循环订阅数组函数
        currentListeners.forEach(listener=>listener())
    }
    //订阅状态 状态发生改变，调用订阅的函数 store.subscribe(()=>{})
    function subscribe(listener){
        currentListeners.push(listener)
    } 
    return {
        dispatch,
        subscribe,
        getState
    }
 
}