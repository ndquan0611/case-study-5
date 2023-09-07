import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';
import Navbar from '~/layouts/components/Navbar';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link>
                    <img src={images.logo} alt="Furama" width={50} />
                </Link>

                <Navbar />

                <div className="action">
                    <Button primary>Login</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
