// import libs:
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../UI/Button/Button';

// import static:
import classes from './Nav.module.scss';

const Nav = ({ isMenu, menuToggle }) => {
    return (
        <nav className={isMenu ? classes.menu__nav : classes.nav}>
            <ul>
                <li onClick={menuToggle}>
                    <Link to="/about_us" style={{textWrap: "nowrap"}}>О нас</Link>
                </li>
                <li onClick={menuToggle}>
                    <Link to="/news">Новости</Link>
                </li>
                <li onClick={menuToggle}>
                    <Link to="/shop">Мерч</Link>
                </li>
                {/* <li onClick={menuToggle}>
                    <Link to="/sections">Секции</Link>
                </li> */}
            </ul>
            <Button to="/contact_us" className={classes.contact_us} onClick={menuToggle}>
                Связаться
            </Button>
        </nav>
    );
};

export default Nav;