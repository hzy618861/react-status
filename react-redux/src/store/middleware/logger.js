// export default function logge(store){
//        return function(next){
//             return function(action){
                     
//             }
//        }
// }

export default store => next => action => {
      console.log(action)
      console.log(store)
// {type: 'increment', payload: 5}
// logger.js:11 {getState: ƒ, dispatch: ƒ}
      next(action)
}