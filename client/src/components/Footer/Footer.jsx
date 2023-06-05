import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span> 
                <span>New Arrivals </span> 
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Odit quibusdam est incidunt doloremque itaque nemo esse
                      corporis minus exercitationem doloribus, nulla a ipsam sunt accusantium, omnis beatae cum nobis aperiam alias maiores. In
                     aliquam dolorem voluptatem et nesciunt nisi, quam voluptatum. Magnam ullam ad neque?</span>
            </div>
            <div className="item">
                <h1>Contact </h1>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis nam ex corporis maiores cumque autem, fugit aliquam, ut porro eveniet repellat! Dolores fugit consequuntur laborum aliquam, unde ab quo molestias?</span>
            </div>
        </div>


        <div className="bottom">
            <div className="left">
                <span className='logo'>STORE4YOU</span>
                <span className='copyright'> © Copyrights: SHOP4YOU, May 2023. <br/> All right reserved</span>
            </div>
            <div className="right">
                <img src="./img/pay.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer



