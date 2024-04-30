import Continue from '../continue/Continue'
import './styles.css'



function Checkout(){
  return(
    <div className='checkout-section'>
      <h2>Checkout</h2>

      <form className="order-forms">
        <div className="input-container">
          <h3>Name</h3>
          <input 
            required 
            className="input-form"
            placeholder="Enter your name">
          </input>
        </div>

        <div className="input-container">
          <h3>Phone</h3>
          <input 
            required 
            className="input-form"
            placeholder="+7___">
          </input>
        </div>

        <div className="container-toggle">
          <b>Confirm the order by phone</b>
          <input 
            className="toggle-input" 
            type="checkbox" 
            id="check1">
          </input>
          <label 
            for="check1" 
            className="toggle-button">
          </label>
        </div>

        <div className="input-container">
          <h3>Delivery address</h3>
          <input 
            required 
            className="input-form"
            placeholder="Enter delivery address">
          </input>
        </div>

        <div className="container-toggle">
          <b>Бесконтактная доставка</b>
          <input 
            className="toggle-input" 
            type="checkbox" 
            id="check2">
          </input>
          <label for="check2" className="toggle-button"></label>
        </div>


        <div className="input-container">
          <h3>Promocode</h3>
          <input 
            required 
            className="input-form"
            placeholder="_ _ _ - _ _ _">
          </input>
        </div>


        <div className="radio-form">
          <h3>Payment method</h3>
          
          <div className="radio-buttons">
            <label className="radio">
              <input 
                type="radio" 
                name="option" 
                value="option1"/>
              <span className="radio-custom"></span>
              Pay
            </label>

            <label className="radio">
              <input 
                type="radio" 
                name="option" 
                value="option2"/>
              <span className="radio-custom"></span>
              By bank card to the courier
            </label>

            <label className="radio">
              <input 
                type="radio" 
                name="option" 
                value="option3"/>
              <span className="radio-custom"></span>
              By cash to the courier
            </label>
          </div>
        </div>

        <a>View Order Contents</a>

       <Continue/>

      </form>
    </div>
  )
}

export default Checkout