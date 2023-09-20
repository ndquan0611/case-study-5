import classNames from 'classnames/bind';
import styles from './Service.module.scss';
import Card from '~/components/Card/Card';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function Service() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Service categories</h2>

            <div>
                <Button to={config.routes.serviceCreate} primary small>
                    Create
                </Button>
            </div>

            <div className={cx('card')}>
                <Card />
            </div>
        </div>
    );
}

export default Service;
