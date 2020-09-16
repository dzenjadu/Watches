import React from 'react';
import './AddToCartButton.css';
import {connect} from "react-redux";
import {addCartItem, setCartCount} from "../../../actions";

const AddToCartButton = ({preview, cartList, costWatch, addCartItem, setCartCount}) => {

    const handleClick = () => {
        let watches = [...cartList];
        let isUniq = true;
        let id = 1;
        let totalCountItems = 0;

        if (watches.length) {

            watches.map((item) => {
                let tempItem = {...item};

                delete tempItem.count;
                delete tempItem.cost;
                delete tempItem.id;

                if (JSON.stringify((tempItem)) === JSON.stringify((preview))) {
                    isUniq = false;
                    item.count += 1;
                    item.cost += costWatch;
                }

                item.id = id;
                id++;
                totalCountItems += item.count;

                return item;
            })
        }

        if (isUniq) {
            totalCountItems += 1;
            watches.push({...preview, id, count: 1, cost: costWatch});
        }

        localStorage.setItem('cart', JSON.stringify(watches));
        localStorage.setItem('cartCount', totalCountItems);

        addCartItem(watches);
        setCartCount(totalCountItems);
    }

    return <button onClick={() => handleClick()} className="button cart__add">Add to cart</button>
}

const mapStateToProps = ({preview, cartList, costWatch}) => {
    return {preview, cartList, costWatch};
}

const mapDispatchToProps = {
    addCartItem,
    setCartCount
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);