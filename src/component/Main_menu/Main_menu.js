import React from 'react';
import classes from './Main_menu.module.css';

const Main_menu = () => {
    return (
        <nav>
            <a href="profile">Профиль</a> &nbsp;
            <a>События</a> &nbsp;
            <a href="messenger">Сообщения</a> &nbsp;
            <a>Друзья</a> &nbsp;
            <a>Сообщества</a>
        </nav>
    )
}

export default Main_menu