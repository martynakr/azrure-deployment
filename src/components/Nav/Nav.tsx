import { NavLink } from 'react-router';
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
};

export default Nav;
