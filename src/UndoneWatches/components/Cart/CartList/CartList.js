import React from 'react';
import './CartList.css';
import {connect} from 'react-redux';
import {addCartItem, setCartCount} from "../../../actions";
import Preview from "../../Preview/Preview";

const CartList = ({cartList, costWatch, cartCount, addCartItem, setCartCount, setIsShowCart}) => {
    let cartListData = [...cartList];

    if (!cartListData.length) {
        return null;
    }

    const totalCost = cartListData.reduce((sum, item) => {
        return sum + item.cost;
    }, 0)

    const changeCount = (id, sign) => {
        cartListData = cartListData
            .map((item) => {
                if (item.id === id) {
                    const countInCart = eval(cartCount + sign + 1);

                    item.count = eval(item.count + sign + 1);
                    item.cost = eval(item.cost + sign + costWatch);

                    localStorage.setItem('cartCount', countInCart);
                    setCartCount(countInCart);
                }
                return item;
            })
            .filter((item) => item.count > 0)

        localStorage.setItem('cart', JSON.stringify(cartListData));
        addCartItem(cartListData);
    }

    const removeWatch = (id) => {
        cartListData = cartListData.filter((item) => {
            if (item.id === id) {
                const countInCart = cartCount - item.count;
                localStorage.setItem('cartCount', countInCart);
                setCartCount(countInCart);
            }
            return item.id !== id;
        })
        localStorage.setItem('cart', JSON.stringify(cartListData));
        addCartItem(cartListData);
    }

    const cartItems = cartListData.map((item) => {
        return (
            <div key={item.id} className="cart__item">
                <div className="cart__watch">
                    <Preview watchInCart={item} />
                </div>
                <div className="cart__block">
                    <div onClick={() => removeWatch(item.id)} className="cart__remove">x</div>
                    <h2 className="cart__title">Custom Watch</h2>
                    <div className="cart__cost">Cost: {item.cost}$</div>
                    <div className="cart__cnt">
                        <span onClick={() => changeCount(item.id, '-')} className="cart__btn">-</span>
                        <span className="cart__num">{item.count}</span>
                        <span onClick={() => changeCount(item.id, '+')} className="cart__btn">+</span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <div onClick={() => setIsShowCart(false)} className="cart__overlay"></div>
            <div className="cart__list">
                <div className="cart__items">{cartItems}</div>
                <div className="cart__total">Total: {totalCost}$</div>
                <button className="button cart__buy">Buy</button>
            </div>
        </>
    )
}

const mapStateToProps = ({cartList, costWatch, cartCount}) => {
    return {cartList, costWatch, cartCount};
}

const mapDispatchToProps = {
    addCartItem,
    setCartCount
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);