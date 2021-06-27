import React from 'react';
import classes from './Profile.module.css';
import Info from '../Info/Info';
import Career from '../Career/Career';

const Profile = () => {
    return (
        <div>
            <Info />
            <Career />
        </div>
    );
}

export default Profile;