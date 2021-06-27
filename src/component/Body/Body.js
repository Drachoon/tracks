import React from 'react';
import classes from './Body.module.css';
import Profile from '../Profile/Profile';
import Messenger from '../Messenger/Messenger';

const Body = () => {
    return (
        <article>
            {/*<Profile />*/}
            <Messenger />
        </article>
    );
}

export default Body;