import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function CardItem({ data = {} }) {
    return (
        <div className={cx('card-item')}>
            <div className={cx('card-photo')}>
                <Image
                    src={data.img}
                    fallback="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg"
                />
            </div>
            <div className={cx('card-info')}>
                <div>
                    <h4 className={cx('name')}>
                        <Link to={config.routes.home}>{data.name}</Link>
                    </h4>
                    <p className={cx('description')}>
                        <span>
                            Room size: {data.usable_area}m<sup>2</sup>
                        </span>
                    </p>
                </div>
                <Button outline small className={cx('card-btn')}>
                    Know more
                </Button>
            </div>
        </div>
    );
}

CardItem.propTypes = {
    data: PropTypes.object,
};

export default CardItem;
