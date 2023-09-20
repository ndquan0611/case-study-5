import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import * as customerService from '~/services/customerService';
import Button from '~/components/Button';
import config from '~/config';
import styles from './Customer.module.scss';
import { Link } from 'react-router-dom';
import RemoveModal from './RemoveModal';

const cx = classNames.bind(styles);

function Customer() {
    const [idRemove, setIdRemove] = useState();
    const [openModalRemove, setOpenModalRemove] = useState(false);
    const [customerList, setCustomerList] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.get();
            setCustomerList(result);
        };
        fetchApi();
    }, []);

    const handleCloseModalRemove = () => {
        setOpenModalRemove(false);
    };

    const handleRemove = async () => {
        await customerService.remove(idRemove);
    };

    const handleOpenModalRemove = () => {
        setOpenModalRemove(true);
    };

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Customer categories</h2>

            <div>
                <Button to={config.routes.customerCreate} primary small>
                    Create
                </Button>
            </div>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Họ tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Số CMND</th>
                        <th>Số Điện Thoại</th>
                        <th>Email</th>
                        <th>Loại khách</th>
                        <th>Địa chỉ</th>
                        <th>Actions</th>
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
                            <td>{item.customerType.type}</td>
                            <td>{item.address}</td>
                            <td>
                                <Link to={`/customer/update/${item.id}`} className="btn btn-primary">
                                    Edit
                                </Link>
                                <button
                                    onClick={() => {
                                        handleOpenModalRemove();
                                        setIdRemove(item.id);
                                    }}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {openModalRemove && (
                <RemoveModal
                    openModal={openModalRemove}
                    closeModal={handleCloseModalRemove}
                    handleRemove={handleRemove}
                />
            )}
        </div>
    );
}

export default Customer;
