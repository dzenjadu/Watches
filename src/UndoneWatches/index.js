import React, {Component} from 'react';
import App from './components/App/App';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';

const UndoneWatchesApp = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default UndoneWatchesApp;