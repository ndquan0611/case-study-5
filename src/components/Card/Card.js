import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import CardItem from './CardItem';
import * as serviceService from '~/services/serviceService';

import styles from './Card.module.scss';
const cx = classNames.bind(styles);

function Card() {
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await serviceService.get();
            setServiceList(result);
        };
        fetchApi();
    }, []);

    console.log(serviceList);

    return (
        <div className={cx('wrapper')}>
            {/* {serviceList.map((item) => (
                <CardItem key={item.id} data={item} />
            ))} */}
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Card;
