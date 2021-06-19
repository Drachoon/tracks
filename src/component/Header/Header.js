import classes from './Header.module.css';

const Header = () => {
    return (
        <header>
            <ul className={classes.header_tools}>
                <li>
                    <a className={classes.logo}>Tracks</a>
                </li>
                <li className={classes.right}>
                    <a href="#">Drachoon</a>
                </li>
            </ul>
        </header>
    );
}

export default Header;