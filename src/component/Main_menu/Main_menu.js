import React from 'react';
import classes from './Main_menu.module.css';
import {NavLink} from 'react-router-dom';

const Main_menu = () => {
    return (
        <nav className={classes.main_nav}>
            <NavLink to="profile" activeClassName={classes.active}>Профиль</NavLink> &nbsp;
            <a>События</a> &nbsp;
            <NavLink to="messenger" activeClassName={classes.active}>Сообщения</NavLink> &nbsp;
            <a>Друзья</a> &nbsp;
            <a>Сообщества</a>
        </nav>
    )
}

export default Main_menu