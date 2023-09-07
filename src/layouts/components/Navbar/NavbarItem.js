import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function NavbarItem({ title, to }) {
    return (
        <NavLink
            className={(nav) =>
                cx('navbar-item', {
                    active: nav.isActive,
                })
            }
            to={to}
        >
            <span>{title}</span>
        </NavLink>
    );
}

export default NavbarItem;
