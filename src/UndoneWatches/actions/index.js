import * as actions from "../constants/ActionTypes";
import categoriesTitle from "../constants/CategoriesTitle";

export const loadWatches = (newData) => {
    return {
        type: actions.WATHES_LOADED,
        payload: newData
    }
}

export const setActiveCategory = (newCategory) => {
    return {
        type: actions.SET_CATEGORY,
        payload: newCategory
    }
}

export const setPreview = (newPreview) => {
    return {
        type: actions.SET_PREVIEW,
        payload: newPreview
    }
}

export const setPreloader = (newValue) => {
    return {
        type: actions.SET_PRELOADER,
        payload: newValue
    }
}

export const setCartCount = (newCount) => {
    return {
        type: actions.SET_CART_COUNT,
        payload: newCount
    }
}

export const addCartItem = (newItem) => {
    return {
        type: actions.ADD_CART_ITEM,
        payload: newItem
    }
}

export const setActiveCategoryTitle = (newCategory) => {
    return {
        type: actions.SET_CATEGORY_TITLE,
        payload: categoriesTitle[newCategory]
    }
}