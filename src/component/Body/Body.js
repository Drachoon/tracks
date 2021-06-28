import React from 'react';
import classes from './Body.module.css';
import Main_menu from '../Main_menu/Main_menu';
import Profile from '../Profile/Profile';
import Messenger from '../Messenger/Messenger';
import {BrowserRouter, Route} from 'react-router-dom';

const Body = () => {
    return (
        <BrowserRouter>
            <Main_menu />
            <article>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/messenger" component={Messenger}></Route>
            </article>
        </BrowserRouter>
    );
}

export default Body;