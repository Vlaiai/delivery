import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import Card from "../../components/card/Card"
import {ReactComponent as Arrow}from "./../../img/arrow.svg"
import { SearchContext } from '../../App'
import {useDispatch, useSelector} from 'react-redux'
import {setTagId,setCategoryId} from '../../redux/slices/filterSlice'


function Categories({items,onClickBack})
{ 


    const dispatch = useDispatch()
    const tagId = useSelector(state=>state.filter.tagId)
    const categoryIndex = useSelector(state => state.filter.categoryId)

    // const onClickBack = ()=>{
    //   dispatch(setCategoryId(null))
    // }

    const onClickTag = (index)=>{
      dispatch(setTagId(index))
    }

    const hashtags =['All','Vegetarian','Hot','Seafood','Spicy','Spicy1','Spicy2',
    ]

    const {searchValue,setSearchValue}= React.useContext(SearchContext)

    let title = 'Popular'

    if(searchValue){
      const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue));
      title = filteredItems.length > 0 ? `Поиск по запросу: ${searchValue}` : ' Увы, ничего не нашлось'
    }

    return(
      <div className="section-component">
        
        {categoryIndex === null ?
       <div>
        <div className="slider">
          <div className="slider-container">
            <img src="img/slider/1.png" alt=""/>
          </div>
        </div>

        <div className='main-menu-container'>
          <div className="main-menu">
            <div className='margin-scroll-cont'>
              <div className="main-menu-section">
                <img src="img/menu/1.png" alt=""/>
                <b>Snacks</b>
              </div>
              <div className="main-menu-section">
                <img src="img/menu/2.png" alt=""/>
                <b>Salads</b>
              </div>
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
           
          </div>
        </div>

        


        <h1 className="title-section">Popular</h1>
       </div> 
        : 
       <div>
          <div onClick={() => onClickBack(null)}  className="arrow-back-div">
            <Arrow/>
            <b>Back</b>
          </div>
        <h1 className="title-section">{title}</h1>
        <div className="tags-container">
          <div className="hashtags">
            { hashtags.map((value, i)=>
              <div 
              key={value}
              onClick={()=>onClickTag(i)} 
              className={tagId === i ? "selected-hashtag" : "hashtag"}>
              <p>{value}</p>
             </div>)
            }
          </div>
        </div>
       </div>
      }
       
        <div className="positions-container">
          <div className="positions-grid">
            {items.filter(item => item.title.toLowerCase().includes(searchValue)).map((obj)=>(
              <Card
              key={obj.id}
                {...obj}
              />
              )
              )
              }
          </div>
        </div>
        
     </div>
    )
  }


export default Categories