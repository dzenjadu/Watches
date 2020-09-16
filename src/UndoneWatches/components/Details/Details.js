import React from 'react';
import './Details.css';
import DetailsList from "../DetailsList/DetailsList";
import {connect} from "react-redux";
import AddToCartButton from "../Cart/AddToCartButton/AddToCartButton";

const Details = ({activeCategoryTitle}) => {
    return(
        <div className="details">
            <div className="details__title">{activeCategoryTitle}</div>
            <DetailsList />
            <AddToCartButton />
        </div>
    )
}

const mapStateToProps = ({activeCategoryTitle}) => {
    return {activeCategoryTitle};
}

export default connect(mapStateToProps)(Details);