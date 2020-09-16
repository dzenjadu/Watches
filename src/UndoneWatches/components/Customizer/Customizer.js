import React from 'react';
import {connect} from "react-redux";
import './Customizer.css';
import CategoriesList from "../CategoriesList/CategoriesList";
import Details from "../Details/Details";
import Preview from "../Preview/Preview";
import Spinner from "../Spinner/Spinner";

const Customizer = ({preloader}) => {

    const loading = preloader ? <Spinner /> : null;
    const content = !preloader ? (
        <div className="container container_customizer">
            <Preview />
            <CategoriesList />
            <Details />
        </div>
    ) : null;

    return (
        <div className="customizer">
            {loading}
            {content}
        </div>
    )
}

const mapStateToProps = ({preloader}) => {
    return {preloader};
}

export default connect(mapStateToProps)(Customizer);