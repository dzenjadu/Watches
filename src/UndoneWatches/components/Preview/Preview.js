import React from 'react';
import './Preview.css';
import {connect} from "react-redux";

const Preview = ({preview, watchInCart}) => {
    let previewList  = [];
    let previewClasses = ['preview'];
    let smallHandsClasses = ['preview__small'];

    if (watchInCart) {
        previewClasses.push('preview_cart');
    }

    if (Object.keys(watchInCart || preview).length) {

        previewList = Object.entries(watchInCart || preview)
            .filter(([category, item]) => item.title !== 'None' && category !== 'id' && category !== 'count' && category !== 'cost')
            .map(([category, item]) => {
                const image = <img key={category} className={`preview__img ${category}`} src={`/images/preview/${category}/${item.img}.png`} alt={item.title}/>;

                if (category === 'dial') {
                    if (item['pos_small_hands'] === 'horizontal') {
                        smallHandsClasses.push('horizontal');
                    }

                    if (!item['pos_small_hands']) {
                        smallHandsClasses.push('none');
                    }
                }

                if (category === 'small_hands') {
                    return (
                        <div key={category} className={smallHandsClasses.join(' ')}>
                            {image}
                            <img className={`preview__img ${category}_2`} src={`/images/preview/${category}/${item.img}.png`} alt={item.title}/>
                        </div>
                    )
                }
            return image;
        })
    }

    return <div className={previewClasses.join(' ')}>{previewList}</div>
}

const mapStateToProps = ({preview}) => {
    return {preview};
}

export default connect(mapStateToProps)(Preview);