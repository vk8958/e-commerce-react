import React from 'react'
import './Navtop.css'
import { Link } from 'react-router-dom';
//this is the cart items page
import Cart from '../Cartitems/Cart.js'
// this is icon from mui
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navtop() {
    return (
        <div className='Navtop'>
            <img className='applogo' src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143409/5_big.png" alt="" />
            <div className='logincart'>
                <button className='loginbtn'><h5>Login </h5></button>
                <Link to='/Cart'>
                <a  className='cart-a'> <ShoppingCartIcon className='cart' /></a>
                </Link>
            </div>
            <div className='count'><h6>2</h6></div>

        </div>
    )
}

export default Navtop