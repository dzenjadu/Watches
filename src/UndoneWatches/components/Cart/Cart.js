import React, {useEffect, useState} from 'react';
import './Cart.css';
import CartList from "./CartList/CartList";
import {connect} from 'react-redux';

const Cart = ({cartCount}) => {
    const [isShowCart, setIsShowCart] = useState(false);
    let clasesCartInfo = ['cart__info'];

    useEffect(() => {
        if (!cartCount) {
            setIsShowCart(false);
        }
    }, [cartCount])

    if (isShowCart) {
        clasesCartInfo.push('active')
    }

    const toggleCart = () => {
        if (cartCount) setIsShowCart(!isShowCart)
    }

    return (
        <div id="cart" className="cart">
            <div onClick={() => toggleCart()} className={clasesCartInfo.join(' ')}>
                Cart
                <div className="cart__count">
                    <span className="cart__number">{cartCount}</span>
                </div>
            </div>
            {isShowCart && <CartList setIsShowCart={setIsShowCart} />}
        </div>
    )
}

const mapStateToProps = ({cartCount}) => {
    return {cartCount};
}

export default connect(mapStateToProps)(Cart);