import React from 'react';
import './App.css';
import Customizer from "../Customizer/Customizer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import WithWatchesService from "../hoc/WithWatchesService";

const App = () => {
    return(
        <WithWatchesService>
            <div className="app">
                <Header />
                <Customizer />
                <Footer />
            </div>
        </WithWatchesService>
    )
}

export default App;