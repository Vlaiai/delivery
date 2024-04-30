import CardHorizontal from '../card-horizontal/CardHorizontal'
import Continue from '../continue/Continue'
import './styles.css'
import {useDispatch, useSelector} from 'react-redux'


function CartSection({onClose}){
  const dispatch = useDispatch()
  const items = useSelector(state=> state.cart.items)

  return(
    <div className='drawer-card'>
     {/* <h2>Card</h2> */}
     <div className="items">
        {items.map((item)=>(
          <CardHorizontal
          key={item.title}
          {...item}
          />)
        )}
     </div> 
     {/* <Continue/> */}
    </div>
  )
}


export default CartSection