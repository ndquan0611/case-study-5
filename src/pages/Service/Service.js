import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Service.module.scss';
import Card from '~/components/Card/Card';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

const serviceData = [
    {
        id: 1,
        name: 'Villa Paradise',
        usable_area: 300,
        rental_cost: 500,
        max_guest: 10,
        type: 'theo ngày',
        free_service: 'bể bơi riêng, xe đưa đón sân bay',
        img: '',
    },
    {
        id: 2,
        name: 'House of Dreams',
        usable_area: 200,
        rental_cost: 300,
        max_guest: 8,
        type: 'theo ngày',
        free_service: 'wifi miễn phí, dịch vụ quản gia',
        img: '',
    },
    {
        id: 3,
        name: 'Deluxe Room',
        usable_area: 25,
        rental_cost: 50,
        max_guest: 2,
        type: 'theo đêm',
        free_service: 'bữa sáng miễn phí, dịch vụ dọn phòng hàng ngày',
        img: '',
    },
    {
        id: 4,
        name: 'Luxury Villa Riverside',
        usable_area: 400,
        rental_cost: 800,
        max_guest: 12,
        type: 'theo ngày',
        free_service: 'bến du thuyền riêng, dịch vụ đặt vé tham quan',
        img: '',
    },
    {
        id: 5,
        name: 'Cozy Cottage',
        usable_area: 100,
        rental_cost: 200,
        max_guest: 4,
        type: 'theo ngày',
        free_service: 'bếp đầy đủ tiện nghi, dịch vụ giặt là',
        img: '',
    },
];

function Service() {
    const [serviceList, setServiceList] = useState(serviceData);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Service categories</h2>

            <div>
                <Button to={config.routes.serviceCreate} primary small>
                    Create
                </Button>
            </div>

            <div className={cx('card')}>
                <Card data={serviceList} />
            </div>
        </div>
    );
}

export default Service;
