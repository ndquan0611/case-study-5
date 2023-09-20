import classNames from 'classnames/bind';
import styles from './Customer.module.scss';
import Button from '~/components/Button/Button';
import config from '~/config';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as customerTypeService from '~/services/customerTypeService';
import * as customerService from '~/services/customerService';
import { Field, Form, Formik } from 'formik';
const cx = classNames.bind(styles);

function CustomerUpdate() {
    const navigate = useNavigate();
    const param = useParams();

    const [customer, setCustomer] = useState({});
    const [customerTypes, setCustomerTypes] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerService.detail(param.id);
            setCustomer(result);
        };
        fetchApi();
    }, [param.id]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await customerTypeService.get();
            setCustomerTypes(result);
        };
        fetchApi();
    }, []);

    const handleSubmit = async (value, { setSubmitting }) => {
        value.customerType = JSON.parse(value.customerType);
        await customerService.put(param.id, value);
        navigate('/customer');
        setSubmitting(false);
    };

    return (
        <>
            <h2 className={cx('title')}>Update customer</h2>

            {Object.keys(customer).length > 0 && (
                <Formik
                    initialValues={{
                        name: customer.name,
                        birthday: customer.birthday,
                        gender: customer.gender,
                        cmnd: customer.cmnd,
                        phone: customer.phone,
                        email: customer.email,
                        address: customer.address,
                        customerType: JSON.stringify(customer.customerType),
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="mb-3">
                            <label className={cx('form-label')}>Tên khách hàng</label>
                            <Field type="text" className={cx('form-control', 'custom-input')} name="name" />
                        </div>
                        <div className="mb-3">
                            <label className={cx('form-label')}>Ngày sinh</label>
                            <Field type="text" className={cx('form-control', 'custom-input')} name="birthday" />
                        </div>
                        <div className="mb-3">
                            <label className={cx('form-label')}>Giới tính</label>
                            <Field type="text" className={cx('form-control', 'custom-input')} name="gender" />
                        </div>
                        <div className="mb-3">
                            <label className={cx('form-label')}>Số CMND</label>
                            <Field type="text" className={cx('form-control', 'custom-input')} name="cmnd" />
                        </div>
                        <div className="mb-3">
                            <label className={cx('form-label')}>Số điện thoại</label>
                            <Field type="text" className={cx('form-control', 'custom-input')} name="phone" />
                        </div>
                        <div className="mb-3">
                            <label className={cx('form-label')}>Email</label>
                            <Field type="text" className={cx('form-control', 'custom-input')} name="email" />
                        </div>
                        <div className="mb-3">
                            <label className={cx('form-label')}>Loại khách</label>
                            <Field
                                type="text"
                                className={cx('form-control', 'custom-input')}
                                name="customerType"
                                as="select"
                            >
                                <option value="">Select Customer Type</option>
                                {customerTypes.map((item) => (
                                    <option key={item.id} value={JSON.stringify(item)}>
                                        {item.type}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div className="mb-3">
                            <label className={cx('form-label')}>Địa chỉ</label>
                            <Field type="text" className={cx('form-control', 'custom-input')} name="address" />
                        </div>
                        <Button to={config.routes.customer} outline small>
                            Close
                        </Button>
                        <Button type="submit" primary small>
                            Save
                        </Button>
                    </Form>
                </Formik>
            )}
        </>
    );
}

export default CustomerUpdate;
