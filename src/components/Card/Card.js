import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CardItem from './CardItem';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card({ data }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((item) => (
                <CardItem key={item.id} data={item} />
            ))}
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Card;
