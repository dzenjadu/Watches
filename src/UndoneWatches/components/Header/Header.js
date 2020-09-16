import React from 'react';
import './Header.css';
import Cart from "../Cart/Cart";


const Header = () => {
    return(
        <header className="header">
            <div className="container container_header">
                <a href="#" className="header__logo">
                    <img src="/images/logo.png" alt="Watch Customizer"/>
                </a>
                <Cart />
            </div>
        </header>
    )
}

export default Header;