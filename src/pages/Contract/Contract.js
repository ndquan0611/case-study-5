import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import config from '~/config';
import styles from './Contract.module.scss';

const cx = classNames.bind(styles);

const contractData = [
    {
        id: 1,
        code: 'CT-01',
        customer: 'Nguyễn Văn A',
        service: 'Villa Paradise',
        begin_date: '2023-01-01',
        end_date: '2023-02-02',
        deposit: 300,
        total_money: 500,
    },
    {
        id: 2,
        code: 'CT-02',
        customer: 'Trần Thị B',
        service: 'Luxury Villa Riverside',
        begin_date: '2023-01-01',
        end_date: '2023-02-02',
        deposit: 300,
        total_money: 500,
    },
    {
        id: 3,
        code: 'CT-03',
        customer: 'Phạm Thanh D',
        service: 'Deluxe Room',
        begin_date: '2023-01-01',
        end_date: '2023-02-02',
        deposit: 300,
        total_money: 500,
    },
    {
        id: 4,
        code: 'CT-04',
        customer: 'Đỗ Tấn E',
        service: 'Cozy Cottage',
        begin_date: '2023-01-01',
        end_date: '2023-02-02',
        deposit: 300,
        total_money: 500,
    },
];

function Contract() {
    const [contractList, setContractList] = useState(contractData);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Contract categories</h2>

            <div>
                <Button to={config.routes.contractCreate} primary small>
                    Create
                </Button>
            </div>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã hợp đồng</th>
                        <th>Tên khách hàng</th>
                        <th>Tên dịch vụ</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Số tiền cọc trước</th>
                        <th>Tổng số tiền thanh toán</th>
                    </tr>
                </thead>
                <tbody>
                    {contractList.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.code}</td>
                            <td>{item.customer}</td>
                            <td>{item.service}</td>
                            <td>{item.begin_date}</td>
                            <td>{item.end_date}</td>
                            <td>{item.deposit}</td>
                            <td>{item.total_money}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contract;
