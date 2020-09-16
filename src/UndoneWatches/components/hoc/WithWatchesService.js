import React from "react";
import {connect} from 'react-redux';
import WarchesService from "../../service/WarchesService";
import {addCartItem, loadWatches, setCartCount, setPreloader, setPreview} from "../../actions";

const WithWatchesService = ({children, loadWatches, setPreview, addCartItem, setCartCount, setPreloader}) => {
    const watchesService = new WarchesService();

    watchesService
        .getWatches()
        .then((watches) => {
            let preview = {};
            loadWatches(watches);

            if (localStorage.getItem('preview')) {
                preview = JSON.parse(localStorage.getItem('preview'))
            } else {
                Object.entries(watches).forEach(([category, items]) => {
                    const [selectedPreviewItem] = items.filter((item) => item.active)

                    if (Object.keys(selectedPreviewItem).length) {
                        preview[category] = selectedPreviewItem;
                    }
                })
            }

            setPreview(preview);
            setPreloader(false);
        })

    if (localStorage.getItem('cart')) {
        addCartItem(JSON.parse(localStorage.getItem('cart')))
    }

    if (localStorage.getItem('cartCount')) {
        setCartCount(Number(localStorage.getItem('cartCount')))
    }

    return <>{children}</>;
}

const mapStateToProps = ({preloader}) => {
    return {preloader};
}

const mapDispatchToProps = {
    loadWatches,
    setPreview,
    addCartItem,
    setCartCount,
    setPreloader,
}

export default connect(mapStateToProps, mapDispatchToProps)(WithWatchesService);