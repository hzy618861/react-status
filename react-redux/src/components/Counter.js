
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counter.action'
function Counter(props){
    const {count,dispatch,increment,decrement} = props
    return <div>
        <button onClick={()=>increment(5)}>+</button>
        <span>{count}</span>
        <button  onClick={()=>decrement(5)} >-</button>
    </div>
  }
  //react-redux 的connect方法可以帮我们订阅store,store状态变化会重新渲染组件
  //可以把store的状态映射到props属性中
  //可以获取dispatch方法注入在组件props属性中

  //connect接受一个函数，返回一个函数，接受的函数的返回值会作为组件的props属性
  //mapStateToProps返回的对象会映射给组件的props属性
  //mapDispatchToProps，可以获取dispatch,返回的函数会映射给组件的props属性
//   const mapDispatchToProps = dispatch => ({
//     incremnet(){
//         dispatch({type:"increment"})
//     },
//     decrement(){
//         dispatch({type:"decrement"})
//     },
//  })
//上述模板属于重复代码
const mapStateToProps = state => ({
   count:state.counter.count
})



const mapDispatchToProps = dispatch => bindActionCreators(counterActions,dispatch)
//bindActionCreators会帮助我们生成下述d对象
//{
    // incremnet(){
    //     dispatch({type:"increment"})
    // },
    // decrement(){
    //     dispatch({type:"decrement"})
    // },
//}
export default  connect(mapStateToProps,mapDispatchToProps)(Counter)
  