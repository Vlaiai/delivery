import './styles.css'

function Footer(){
  return(
    <footer>
        <div className="footer-container">
          <ul className="footer-contacts">
            <li>
             <b>Delivery</b>
            </li>

            <li>
             <b>Paymenr</b>
            </li>

            <li>
             <p>+7 999 201 04 22</p>
            </li>
           
            <li>
             <p>Info@olympia-palace</p>
            </li>
            
           
          </ul>
          <ul className="footer-socials">
            <li><img height={35} width={35} src="img/facebook.svg" alt=""/>
            </li>
            <li>
              <img height={35} width={35} src="img/instagram.svg" alt=""/>   
            </li>
            <li>
              <img height={35} width={35} src="img/telegram.svg" alt=""/>
            </li>
            
            
           
          </ul>
        </div>
       </footer>
  )
}

export default Footer