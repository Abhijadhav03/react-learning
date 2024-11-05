import {LOGO_URL} from "../utils/constants";
const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL}/>
            </div>
           <div className='nav-items'>
              <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li className='cart-logo'><img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/cart-icon-download-in-svg-png-gif-file-formats--shopping-online-trolley-pack-e-commerce-icons-1597724.png?f=webp&w=512'/></li>
              </ul>
           </div>
            </div>
    )
};

export default Header