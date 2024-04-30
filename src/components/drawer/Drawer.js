import './styles.css'
import React  from 'react'
import axios from 'axios'
import CartSection from '../cart-section/CartSection'
import Checkout from '../checkout/Checkout'

  function Drawer({onClose,cartItems,setCartItems}){

  const removeItem = (id)=>{
    axios.delete(`https://660affe2ccda4cbc75dc3d30.mockapi.io/cart/${id}`)
    setCartItems(prev=> prev.filter(item => item.id !== id))
  }
  return(
    <div className="overlay">
      <div className="drawer">


        <div 
          className="close-button-container">
          <img 
            onClick={onClose}
            height={24} width={24} src="img/Closebutton.svg"
            />
        </div>



        <div className="drawer-container">
          {
            cartItems.length > 0 ? <CartSection 
            items={cartItems}
            removeItem={removeItem}/>
            :
            <div className='drawer-card'>
            <h2>Cart is empty</h2>
           </div>
          }
         
         
       
          {/* <Checkout/> */}
        </div>
        
      </div>
    </div>
  )
}



export default Drawer