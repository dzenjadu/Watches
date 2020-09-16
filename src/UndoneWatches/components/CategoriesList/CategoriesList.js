import React from 'react';
import './CategoriesList.css';
import {connect} from 'react-redux';
import {setActiveCategory, setActiveCategoryTitle} from "../../actions";

const CategoriesList = ({watches, activeCategory, setActiveCategory, setActiveCategoryTitle}) => {

    const handleClickCategory = (category) => {
        setActiveCategory(category);
        setActiveCategoryTitle(category);
    }

    const categoriesList = Object.entries(watches).map(([key, value], index) => {
        const classList = ['categories__item', key];

        if (key === activeCategory) {
            classList.push('active')
        }

        return <div key={key} onClick={() => handleClickCategory(key)} className={classList.join(' ')}></div>
    })

    return <div className="categories">{categoriesList}</div>
}

const mapStateToProps = ({watches, activeCategory}) => {
    return {
        watches,
        activeCategory
    };
}

const mapDispatchToProps = {
    setActiveCategory,
    setActiveCategoryTitle
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);