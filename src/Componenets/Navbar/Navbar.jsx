import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu, setMenu] = useState("Shop")
    const {getTotalCartItems} = useContext(ShopContext)
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt='' />
                <p>SHOPIFY</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration: 'none'}} to= '/'>Shop</Link >{menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration: 'none'}} to= '/mens'>Mens</Link>{menu==="Mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration: 'none'}} to= '/womens'>Womens</Link>{menu==="Womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration: 'none'}} to= '/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
                 {/* <li onClick={()=>{setMenu("Shop")}}>Shop{menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Mens")}}>Mens{menu==="Mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Womens")}}>Womens{menu==="Womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Kids")}}>Kids{menu==="Kids"?<hr/>:<></>}</li> */}
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='' /></Link>
                {/* <button>Login</button>
                <img src={cart_icon} alt='' /> */}
                <div className= "nav-cart-count">{getTotalCartItems()}</div>

            </div>

        </div>
    )
}

export default Navbar
