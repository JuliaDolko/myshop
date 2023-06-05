import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import "../Navbar/Navbar.scss" 
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const[open, setOpen] = useState(false);
    const products = useSelector((state)=>state.cart.products);


  return (
    <div className='navbar'>
        <div className="wrapper">

                {/* LEFT PART  */}
            <div className="left">
                <div className="item">
                    <LanguageIcon/>
                    <ExpandMoreIcon/>
                </div>
                <div className="item">
                    <span>USD</span>
                    <ExpandMoreIcon/>
                </div>
                <div className="item">
                    <Link className='link'  to="./products/1"> Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to="./products/2"> Men</Link>
                </div>
                <div className="item">
                    <Link className='link' to="./products/3"> Children</Link>
                </div>
            </div>

            {/* CENTER PART  */}
            <div className="center">
                <Link className='link'> STORE4YOU</Link>
            </div>

             {/* RIGHT  PART  */}
            <div className="right">
                <div className="item">
                    <Link className='link'> Home </Link>
                </div>
                <div className="item">
                    <Link className='link'> About us </Link>
                </div>
                <div className="item">
                    <Link className='link'> Contact </Link>
                </div>
                <div className="item">
                    <Link className='link'> Stores </Link>
                </div>
                <div className="icons">
                    <SearchIcon/>
                    <PersonIcon/>
                    <FavoriteBorderIcon/>
                    <div className="cartIcon" onClick={() => setOpen(!open)}>
                         <ShoppingCartIcon />
                         <span>{products.length} </span>
                    </div>
                    
                </div>
            </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar