import "./Navbar.css";
import {useState} from 'react';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import { Link } from "react-router-dom";
const Navbar = () => {

    const [menu, setMenu] = useState("")
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <Link to='/'>
                        <img src={logo} alt="Minimum to Maximum" width={50} onClick={() => {setMenu('')}}/>
                    </Link>
                </div>
                <ul className="nav-menu">
                    <li onClick={()=>{setMenu('all')}}><Link to='/all'>All Products</Link>{menu === 'all'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('men')}}><Link to='men'>Men</Link>{menu === 'men'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('women')}}><Link to='women'>Women</Link>{menu === 'women'?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu('kids')}}><Link to='kids'>Kids</Link>{menu === 'kids'?<hr/>:<></>}</li>
                </ul>
                <div className="nav-login-cart">
                    <button><Link to='login'>Login</Link></button>
                    <Link to='cart'>
                        <img src={cart} alt="Cart" width={40} />
                    </Link>
                    <div className="nav-cart-count">0</div>
                </div>
            </div>
        </>
    )
}

export default Navbar