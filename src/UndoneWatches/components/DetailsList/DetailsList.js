import React from 'react';
import './DetailsList.css';
import {connect} from 'react-redux';
import {setPreview} from "../../actions";


const DetailsList = ({watches, activeCategory, setPreview, preview}) => {
    // const countCellOnPage = 28;

    const selectDetail = (item) => {
        if (preview[activeCategory].title !== item.title) {
            const newPreview = {
                ...preview,
                [activeCategory]: item
            }
            setPreview(newPreview);
            localStorage.setItem('preview', JSON.stringify(newPreview));
        }
    }

    if (!Object.keys(watches).length) {
        return null;
    }

    const categoryList = watches[activeCategory].map((item, index) => {
        let classesDetail = ['details__item'];

        if (preview[activeCategory].img === item.img) {
            classesDetail.push('active');
        }

        return (
            <div key={index} className={classesDetail.join(' ')}>
                <img className="details__img"
                     src={`/images/details/${activeCategory}/${item.img}.jpg`}
                     onClick={() => selectDetail(item)}
                     alt={item.title}
                />
            </div>
        )
    })

    // const cells = new Array(countCellOnPage - categoryList.length).fill(<div className="details__item"></div>);

    return(
        <div className="details__list">
            {categoryList}
            {/*{cells}*/}
        </div>
    )
}

const mapStateToProps = ({watches, activeCategory, preview}) => {
    return {
        watches,
        activeCategory,
        preview,
    };
}

const mapDispatchToProps = {
    setPreview
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsList);