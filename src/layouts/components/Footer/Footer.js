import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <p className={cx('text')}>Copyrigth @ Furama</p>
        </footer>
    );
}

export default Footer;
