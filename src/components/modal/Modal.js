import './styles.css'

function Modal(){
  return(
    <div className="modalcard">    
      <div className="modal-card">
        <div className="close-button-container-modal">
          <img height={24} width={24} 
          alt="close-button"
          src="img/Closebutton.svg"/>
        </div>
        <div className="modal-titlecontainer">
          <h2>Теплый салат с лососем</h2>
          <p>200 g</p>
        </div>
        <div className="md-gallery"> 
          <img src="img/modal/1.png" alt=""/>
          <img src="img/modal/2.png" alt=""/>
          <img src="img/modal/3.png" alt=""/>
        </div>
        <div className="modal-contant">    
          <p>
            Сытный легкий салат с кусочками лосося горячего копчения, запеченным картофелем стоун, свежими овощами (сочными томатами и деревенскими огурцами) и красным луком для пикантности. Секретный элемент - соус из тунца по фирменному рецепту нашего Шеф-повара. Сочетание этих ингредиентов делает этот салат одним из любимейших у наших гостей. Хорошим продолжением будет выбор одного из популярных воков и вкусного десерта - например, медовика или тирамису.  
          </p>

          <div className="md-ingridients" >
            <b className="title-ingridients">
              Состав</b>
            <p>
              Листья салата, томаты свежие, свежие огурцы, картофель стоун, яйцо куриное, лук красный, филе лосося горячего копчения, соус из тунца.
            </p>
          </div>
          <div className="energy-value">
              <b>
                Энергетическая ценнсость на 100 г
              </b>
            <div>
              <p>Белки</p>
              <b>14,2</b>
            </div>
            <div>
              <p>Жиры</p>
              <b>17,6</b>
            </div>
            <div>
              <p>Углеводы</p>
              <b>6,6</b>
            </div>
            <div>
              <p>Энерг. ценность </p>
              <b>242,3 кКал</b>
            </div>
          </div>
          <div className="line"></div>
          <div className="md-price-n-nbutton">
            <b>490 RUB</b>
            <div className="cart-buttons-modal">
              <button className="minus-button">
                <img height={24} width={24} src="img/minus.svg" alt="minus"/>
              </button>
              <b>1</b>
              <button  className="plus-button">
                <img height={24} width={24} src="img/plus.svg" alt="plus"/>
              </button>
            </div>
            {/* <button className="modal-button"><b>Add</b></button> */}
          </div>
        </div>

      </div>
      <div className="modalcard-overlay">
      </div>
    </div>
  )
}

export default Modal