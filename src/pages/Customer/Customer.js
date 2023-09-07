import { useState } from 'react';
import classNames from 'classnames/bind';
import Card from '~/components/Card/Card';
import Button from '~/components/Button';
import config from '~/config';
import styles from './Customer.module.scss';

const cx = classNames.bind(styles);

function Customer() {
    const customerData = [
        {
            id: 1,
            name: 'Nguyễn Văn A',
            birthday: '1990-01-01',
            gender: 'Nam',
            cmnd: '123456789',
            phone: '0987654321',
            email: 'van.a@gmail.com',
            type: 'Diamond',
            address: '123 ABC, Tp. Hồ Chí Minh',
        },
        {
            id: 2,
            name: 'Lê Hoàng C',
            birthday: '1988-11-30',
            gender: 'Nam',
            cmnd: '567894321',
            phone: '0912345678',
            email: 'hoang.c@gmail.com',
            type: 'Platinum',
            address: '789 MNL, Tp. Đà Nẵng',
        },
        {
            id: 3,
            name: 'Phạm Thanh D',
            birthday: '1995-09-08',
            gender: 'Nữ',
            cmnd: '456732198',
            phone: '0876543210',
            email: 'thanh.d@gmail.com',
            type: 'Gold',
            address: '246 QWE, Tp. Đà Lạt',
        },
        {
            id: 4,
            name: 'Trần Thị B',
            birthday: '1985-05-15',
            gender: 'Nữ',
            cmnd: '987654321',
            phone: '0123456789',
            email: 'thi.b@gmail.com',
            type: 'Silver',
            address: '456 XYZ, Tp. Hà Nội',
        },
        {
            id: 5,
            name: 'Đỗ Tấn E',
            birthday: '1992-02-20',
            gender: 'Nam',
            cmnd: '783219456',
            phone: '0654321098',
            email: 'tan.e@gmail.com',
            type: 'Member',
            address: '985 UYT, Tp. Nha Trang',
        },
    ];

    const [customerList, setCustomerList] = useState(customerData);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Customer categories</h2>

            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Ngày sinh</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Số CMND</th>
                        <th scope="col">Số Điện Thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Loại khách</th>
                        <th scope="col">Địa chỉ</th>
                    </tr>
                </thead>
                <tbody>
                    {customerList.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.birthday}</td>
                            <td>{item.gender}</td>
                            <td>{item.cmnd}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.type}</td>
                            <td>{item.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Customer;