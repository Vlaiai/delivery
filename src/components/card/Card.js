
import {useDispatch, useSelector} from 'react-redux'
import "./styles.css"
import {addItem, removeItem} from "../../redux/slices/cartSlice"
function Card ({id,img,title,gramms,price}){

const dispatch = useDispatch();

 const cartItem = useSelector(state=> state.cart.items.find(obj => obj.id === id))

 const addedCount = cartItem ? cartItem.amount : 0;

 const onClickCard = ()=>{
  const item={
    id,
    title,
    img,
    price
  }
  dispatch(addItem(item))
 }

 const onClickMinus = ()=>{
  dispatch(removeItem({id}))
 }

  return(
    <div className="card">

      <img 
      className='card-img'
        src={img}
        alt={title}
      />

      <div>
        <b>{title}</b>
        <p>{gramms} g</p>
      </div>
      

      {addedCount > 0 ?  <div 
      className="cart-buttons-main">
        <button 
        onClick={onClickMinus}
        className="minus-button">
          <img 
            height={24}
            width={24} 
            src="img/minus.svg" 
            alt="minus"
          />
        </button>
        <b>{addedCount}</b>
        <button 
         onClick={onClickCard} 
         className="plus-button"
        >
          <img 
            height={24} 
            width={24} 
            src="img/plus.svg" 
            alt="plus"
          />
        </button>
      </div> : 
       <button 
       onClick={onClickCard}
       className="card-button" 
     >
       <b>{price} Eur</b>
     </button>
      }
    </div>
  )
}

export default Card