import classNames from 'classnames/bind';

import config from '~/config';
import NavbarItem from './NavbarItem';

import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <nav className={cx('wrapper')}>
            <NavbarItem title="Home" to={config.routes.home} />
            <NavbarItem title="Service" to={config.routes.service} />
            <NavbarItem title="Employee" to={config.routes.employee} />
            <NavbarItem title="Customer" to={config.routes.customer} />
            <NavbarItem title="Contract" to={config.routes.contract} />
        </nav>
    );
}

export default Navbar;
