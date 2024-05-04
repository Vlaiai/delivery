import React from 'react'
// import {Route,Routes} from 'react-router-dom'
import 'macro-css';
import {useDispatch, useSelector} from 'react-redux'
import {setCategoryId} from './redux/slices/filterSlice'
import Header from './components/header/Header'
import "./styles/main.css"
import Categories from './pages/categories/Categories'
import Modal from './components/modal/Modal'
import axios from 'axios'
import LeftMenu from './components/left-menu/LeftMenu'
import RightCart from './components/right-cart/RightCart'
import { fetchProducts} from './redux/slices/productsSlice';

export const SearchContext = React.createContext('');


function App() {
  const  dispatch = useDispatch()
  const  categoryIndex = useSelector(state => state.filter.categoryId)
  const items = useSelector((state)=> state.products.items)

  const onClickCategory = (id)=>{
      dispatch(setCategoryId(id))
  }
  
  const [cartItems, setCartItems]= React.useState([])
  const [searchValue, setSearchValue]=React.useState('')
  const [cartOpened, setCardOpened]=React.useState(false)



  const getProducts = async ()=>{
    const category = categoryIndex !== null ? `category=${categoryIndex}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchProducts({
      category,
      search
      })
    );

    window.scrollTo(0,0)
  }

  React.useEffect(()=>{
    getProducts()

    // const cartResponse =  axios.get("https://660affe2ccda4cbc75dc3d30.mockapi.io/cart");

    // setCartItems(cartResponse.data);
  //  dispatch(setItems(data))
// }  
   
  }, [categoryIndex, searchValue])







  const onAddToCard = (obj)=>{    
    try {
     axios.post("https://660affe2ccda4cbc75dc3d30.mockapi.io/cart", obj)
    .then(res => setCartItems(prev => [...prev, res.data])) 
    } catch (error) {}
  }
 


  return (
    <div className="App">
    <SearchContext.Provider value={{searchValue,setSearchValue}}>
   

      <div className="wrapper">  

       {cartOpened && <RightCart 
        onClose={()=>setCardOpened(false)}
        />}

         {/* {cartOpened && <Drawer 
        onClose={()=>setCardOpened(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
        />} */}

        <Header 
        onClickCart={()=>setCardOpened(true)
        }
        cartOpened={cartOpened}
        />
        

        <LeftMenu
          value={categoryIndex}   
          onClickCategory={onClickCategory}       
        />

         {/* <Modal/>  */}

        <div className="content">
          <div className='main-content-conteiner'>
            <Categories 
            items={items}
            onAddToCard={onAddToCard} 
            onClickBack={onClickCategory}     
            /> 
          </div>
        </div>
         {/* <Footer/>   */}
      </div>
    </SearchContext.Provider>
    </div>
  );
}

export default App;
