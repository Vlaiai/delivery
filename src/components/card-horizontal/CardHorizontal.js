import './styles.css'
import {useDispatch, useSelector} from 'react-redux'
import {addItem, removeItem,clearItem} from "../../redux/slices/cartSlice"

function CardHorizontal({title,price,img,amount,id}){
  const dispatch = useDispatch();

  const cartItem = useSelector(state=> state.cart.items.find(obj => obj.id === id))

  const addedCount = cartItem ? cartItem.amount : 0;
  const onClickPlus = ()=>{
    dispatch(addItem({id}))
   }

  //  const clear = ()=>{
  //   dispatch(clearItem())если указать id то удалит конкретную штучку
  //}

   const onClickMinus = ()=>{
    dispatch(removeItem({id}))
   }
  return(
    <div className="cart-item">
      <img 
        className="cart-item-img" 
        height={154} 
        width={154} 
        src={img} 
        alt=""
      />
      
      <div>
        <b>{title}</b>
        <h3>{price * amount} Eur</h3>
        <div className="cart-buttons">
          <button 
           onClick={onClickMinus}
           className="minus-button">
            <img height={24} width={24} src="img/minus.svg" alt="minus"/>
          </button>

          <b>{addedCount}</b>
          
          <button  
           onClick={onClickPlus}
           className="plus-button">
            <img height={24} width={24} src="img/plus.svg" alt="plus"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardHorizontal