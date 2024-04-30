import './styles.css'
import React from 'react'
import {Link} from 'react-router-dom'

function LeftMenu({value, onClickCategory}){

  // const [categoryIndex, setCategoryIndex]= React.useState(null)
  // const onClickCategory = (index)=>{
  //   setCategoryIndex(index)
  // };


  const categories = [
    "Snacks",
    "Salads",
    "Hot Dishes",
    "Soups",
    "Street food",
    "Wok and pasta",
    "Desserts",
    "Drinks",
    "Sauces",
  ]

  return(
    <div className="left-overlay">
      <div className="left-drawer">


        {/* <div className="close-button-container">
          <img height={24} width={24} src="/img/Closebutton.svg"/>
        </div> */}
    
        <div className="menu-container bold">
          <ul>
            {
              categories.map((categoryName, i)=>
                <li 
                  key={categoryName}
                  onClick={() => onClickCategory(i)} 
                  className={value === i? 'selected' : "" } >{categoryName}
                </li>
              )
            }
          </ul>




         {/* //////BREAKFAST AND LUNCHES////// */}
          {/* <ul>
            <li>Breakfasts</li>
            <li>Lunches</li>
          </ul> */}



         {/* ////////CONTACTS MENU//////////// */}
          {/* <ul>
            <li>Contacts</li>
            <li>Delivery</li>
            <li>Payment</li>
          </ul> */}

        </div>
        
      </div>
  </div>
  )
}

export default LeftMenu