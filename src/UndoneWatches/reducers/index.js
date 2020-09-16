import * as actions from "../constants/ActionTypes";
import categoriesTitle from "../constants/CategoriesTitle";

const defaultActiveCategory = 'strap';

const initState = {
    preloader: true,
    watches: {},
    preview: {},
    cartList: [],
    cartCount: 0,
    costWatch: 450,
    activeCategory: defaultActiveCategory,
    activeCategoryTitle: categoriesTitle[defaultActiveCategory],
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SET_CATEGORY:
            return {...state, activeCategory: action.payload}
        case actions.SET_PREVIEW:
            return {...state, preview: action.payload}
        case actions.SET_PRELOADER:
            return {...state, preloader: action.payload}
        case actions.SET_CART_COUNT:
            return {...state, cartCount: action.payload}
        case actions.WATHES_LOADED:
            return {...state, watches: action.payload}
        case actions.SET_CATEGORY_TITLE:
            return {...state, activeCategoryTitle: action.payload}
        case actions.ADD_CART_ITEM:
            return {...state, cartList: action.payload}
        default:
            return state
    }
}

export default reducer;