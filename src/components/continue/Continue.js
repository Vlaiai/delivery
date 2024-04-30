import './styles.css'
import {useSelector} from 'react-redux'
function Continue(){
  const {items, totalPrice} = useSelector(state => state.cart)
  const totalCount = items.reduce((sum, item)=>
  sum + item.amount, 0
 )
  return(
    <div className="container-continue">
      <div className="continue-button">
        <div className="counter-container">
          <div className="counter-cart">{totalCount}</div>
        </div>
        
        <b>Continue</b>

        <div className="cart-price-container">
          <b>{totalPrice}€</b>
        </div>
        
      </div>
    </div>
  )
}

export default Continue