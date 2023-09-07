import classNames from 'classnames/bind';
import styles from './Customer.module.scss';
import Button from '~/components/Button/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function CustomerCreate() {
    return (
        <>
            <h2 className={cx('title')}>Create customer</h2>

            <form>
                <div className="mb-3">
                    <label className={cx('form-label')}>Tên khách hàng</label>
                    <input type="text" className={cx('form-control', 'custom-input')} name="name" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Ngày sinh</label>
                    <input type="number" className={cx('form-control', 'custom-input')} name="usageArea" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Giới tính</label>
                    <input type="number" className={cx('form-control', 'custom-input')} name="rentalCost" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Số CMND</label>
                    <input type="number" className={cx('form-control', 'custom-input')} name="maxGuest" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Số điện thoại</label>
                    <input type="text" className={cx('form-control', 'custom-input')} name="rentalType" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Email</label>
                    <input type="text" className={cx('form-control', 'custom-input')} name="otherConvenient" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Loại khách</label>
                    <input type="text" className={cx('form-control', 'custom-input')} name="imgURL" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Địa chỉ</label>
                    <input type="text" className={cx('form-control', 'custom-input')} name="imgURL" />
                </div>
                <Button to={config.routes.customer} outline small>
                    Close
                </Button>
                <Button type="submit" primary small>
                    Save
                </Button>
            </form>
        </>
    );
}

export default CustomerCreate;
