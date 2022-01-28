import React,{ Component } from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cartActions from '../store/actions/cart.actions'
  class Cart extends Component {
    render(){
         const {carts,addProductToLocalCart,removeProductToCart} = this.props
         return  <section className="container content-section">
         <h2 className="section-header">购物车</h2>
         <div className="cart-row">
             <span className="cart-item cart-header cart-column">商品</span>
             <span className="cart-price cart-header cart-column">价格</span>
             <span className="cart-quantity cart-header cart-column">数量</span>
         </div>
         <div className="cart-items">
            {
               carts.map(item=>(
                <div className="cart-row" key={item.id}>
                <div className="cart-item cart-column">
                    <img className="cart-item-image" src={item.thumbnail} width="100" height="100" />
                    <span className="cart-item-title">{item.title}</span>
                </div>
                <span className="cart-price cart-column">￥{item.price}</span>
                <div className="cart-quantity cart-column">
                    <input className="cart-quantity-input" value={item.count}  onChange={e=>{this.changeProductNumber(item.id,e)}} type="number"/>
                    <button onClick={()=>removeProductToCart(item.id)} className="btn btn-danger" type="button">删除</button>
                </div>
            </div>
               ))
            }
         </div>
         <div className="cart-total">
             <strong className="cart-total-title">总价</strong>
             <span className="cart-total-price">￥39.97</span>
         </div>
     </section>
    }
    changeProductNumber(cid,e){
        const {changeServerProductNumber} = this.props
        const count =e.target.value
        //向服务器请求更新商品数量
        changeServerProductNumber({cid,count})
    }
    componentDidMount(){
          const {loadCarts} = this.props
          loadCarts()
    }
}
const mapStateToProps = state => ({
    carts:state.carts
})
const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(cartActions,dispatch)
})
export default  connect(mapStateToProps,mapDispatchToProps)(Cart)