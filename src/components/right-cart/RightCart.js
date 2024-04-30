import './styles.css'
import CartSection from '../cart-section/CartSection'
import React  from 'react'
import axios from 'axios'
import Continue from '../continue/Continue'

import {useDispatch, useSelector} from 'react-redux'

function RightCart({onClose,cartItems,setCartItems}){

  const dispatch = useDispatch()
  const items = useSelector(state=> state.cart.items)

  const removeItem = (id)=>{
    axios.delete(`https://660affe2ccda4cbc75dc3d30.mockapi.io/cart/${id}`)
    setCartItems(prev=> prev.filter(item => item.id !== id))
  }

  const sidecartRef = React.useRef()
  React.useEffect(()=>{
    const clickOutside =  event => {
      if (!event.composedPath().includes(sidecartRef.current)){onClose()}}
    document.body.addEventListener('click',clickOutside)
    return()=> document.body.removeEventListener('click',clickOutside)
  }, [])


  return(
    <div className='backdrop'>
      <div ref={sidecartRef} className='sidecart'>
        <div className='cartcontent'>
          <div className='cart-header'>
            <div className="close-button-container">
              <img onClick={onClose} height={24} width={24} src="img/Closebutton.svg"/>
            </div>
            <h2>Cart</h2>
          </div>
          <div className='cart-items'>
            {items.length > 0 ? <CartSection 
              items={cartItems}
              removeItem={removeItem}/>
              :
              <div className='drawer-card'>
                  <h2>Cart is empty</h2>
              </div>
            }
          </div>
          <Continue/>
        </div>
      </div>
    </div>
  )
}

export default RightCart