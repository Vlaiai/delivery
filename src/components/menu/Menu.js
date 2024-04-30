import './styles.css'

function Menu(){
  return(
    <div className="left-menu bold">
      <ul>
        <li>Snacks</li>
        <li className="menu-selected..." >Salads</li>
        <li>Rolls</li>
        <li >Hot Dishes</li>
        <li>Soups</li>
        <li>Street food</li>
        <li>Wok and pasta</li>
        <li>Desserts</li>
        <li>Drinks</li>
        <li>Sauces</li>
      </ul>

      <ul>
        <li>Breakfasts</li>
        <li>Lunches</li>
      </ul>

      {/* <ul>
        <li>Contacts</li>
        <li>Delivery</li>
        <li>Payment</li>
      </ul> */}
    </div>
  )
}

export default Menu