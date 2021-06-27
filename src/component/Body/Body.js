import React from 'react';
import classes from './Body.module.css';
import Profile from '../Profile/Profile';
import Messenger from '../Messenger/Messenger';
import {BrowserRouter, Route} from 'react-router-dom';

const Body = () => {
    return (
        <BrowserRouter>
            <article>
                <Route path="/profile" component={Profile}></Route>
                <Route path="/messenger" component={Messenger}></Route>
            </article>
        </BrowserRouter>
    );
}

export default Body;