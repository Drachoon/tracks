import React from 'react';
import logo from './logo.svg';
import './css/reset.css';
import './App.css';
import Header from'./component/Header/Header';
import Main_menu from './component/Main_menu/Main_menu';
import Body from './component/Body/Body';
import Footer from './component/Footer/Footer';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Main_menu />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
