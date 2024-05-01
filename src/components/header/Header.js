import React from 'react'
import "./styles.css"
import { ReactComponent as ImgCard }from "./../../img/card.svg"
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'
import {useSelector} from 'react-redux'



function Header({onClickCart,cartOpened}){ 
  const {items, totalPrice} = useSelector(state => state.cart)
  const [value,setValue] = React.useState('')
  const {setSearchValue}= React.useContext(SearchContext)
  const inputRef = React.useRef()
  const clearSearch = ()=>{
    setSearchValue('')
    setValue('')
    inputRef.current.focus()}

  const updateSearchValue = React.useCallback(
    debounce((str)=>{
      setSearchValue(str);
    }, 250),
    [])

  const onChangeSearchInput = (event) =>{
    setValue(event.target.value)
    updateSearchValue(event.target.value.toLowerCase())}


  const totalCount = items.reduce((sum, item)=>
   sum + item.amount, 0
  )




  return(
    <header id="header-section">
      <div className="left-header">
        <img
          className="menu-button"
          src="img/menu.svg"
          alt="menuicon"
        />
        <div className="header-contacts">
          <h3>+7 999 201 04 22</h3>
          <p>/  9:00-22:00</p>
        </div>
       
      </div>

      <div className="mid-header">
        <img className="logo" src="img/logo.svg" alt="logoicon"/>
      </div>
      
      <div className="right-header"> 

       <div className="search-container">
        <input 
         ref={inputRef}
         required 
         onChange={onChangeSearchInput}
         className="search-input" 
         type="textbox"
         value={value}
         placeholder="Caesar salad"
        />

        { value ? <img 
            onClick={ clearSearch }
            width={20}
            height={20}
            src="img/close.svg" alt="Clear"
            className='clear'
          /> :   <img 
          height={36}
          width={36}
          src="img/search.svg" alt="Search"
        />}

        
       </div>

       {/* <img src="/img/search.svg" alt="searchicon"/> */}

       <div 
       className="cart-container"
       onClick={(event)=>{
        event.stopPropagation();
        onClickCart()}}
       >
          <div className='cart-icon-div'>
            {cartOpened && <span className='rectangle'><img src='img/rectangle.svg'/></span>}
            <ImgCard 
              width={36}  
              height={36} 
              className={cartOpened ? "card-selected": "card-header-icon"}
            /> 
          </div>
         
          {items.length > 0 ? <div className="card-counter"> 
            <div>{totalCount} / {totalPrice}€</ div>
          </div>: ''}
       </div>
       
      </div>
    </header>  
  )
}

export default Header