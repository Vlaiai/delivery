import './styles.css'
import React from 'react'
import {Link} from 'react-router-dom'
import Card from "../../components/card/Card"
import { SearchContext } from '../../App'

function Main({items,onAddToCard}){

  const {searchValue}= React.useContext(SearchContext)

  let title = 'Popular'

  if(searchValue){
    const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue));
    title = filteredItems.length > 0 ? `Поиск по запросу: ${searchValue}` : ' Увы, ничего не нашлось'
  }

  return(
      <div className="section-main-container">
        <div className="slider">
          <div className="slider-container">
            <img src="img/slider/1.png" alt=""/>
          </div>
        </div>

        <div className="main-menu">
          <div className="main-menu-section">
            <img src="img/menu/1.png" alt=""/>
            <b>Snacks</b>
          </div>

          <Link
           className='link-style'
           to="/salads">
            <div className="main-menu-section">
              <img src="img/menu/2.png" alt=""/>
              <b>Salads</b>
            </div>
          </Link>
         

          <div className="main-menu-section">
            <img src="img/menu/3.png" alt=""/>
            <b>Rolls</b>
          </div>
          <div className="main-menu-section">
            <img src="img/menu/4.png" alt=""/>
            <b>Wok and pasta</b>
          </div>
          <div className="main-menu-section">
            <img src="img/menu/5.png" alt=""/>
            <b>Street food</b>
          </div>
          <div className="main-menu-section">
            <img src="img/menu/6.png" alt=""/>
            <b>Soups</b>
          </div>
          <div className="main-menu-section">
            <img src="img/menu/7.png" alt=""/>
            <b>Hot Dishes</b>
          </div>
          
          <div className="main-menu-section">
            <img src="img/menu/9.png" alt=""/>
            <b>Drinks</b>
          </div>
          <div className="main-menu-section">
            <img src="img/menu/10.png" alt=""/>
            <b>Breakfasts</b>
          </div>
          <div className="main-menu-section">
            <img src="img/menu/11.png" alt=""/>
            <b>Sauces</b>
          </div>
        </div>


        <h1 className="title-section">{title}</h1>


        <div className="positions-grid">
          {items.filter(item => item.title.toLowerCase().includes(searchValue)).map((obj)=>(
              <Card
                  key={obj.title}
                  {...obj}
                  onAdd= {()=>onAddToCard(obj)}
              />
              )
            )
            }
        </div>
     
          


    </div>
  )
}

export default Main