import React from 'react';
import classes from './Main_menu.module.css';

const Main_menu = () => {
    return (
        <nav>
            <a href="profile">Профиль</a> &nbsp;
            <a href="messenger">Сообщения</a>
        </nav>
    )
}

export default Main_menu