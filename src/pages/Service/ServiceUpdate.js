import 'bootstrap/dist/css/bootstrap.css';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import config from '~/config';
import styles from './Service.module.scss';

const cx = classNames.bind(styles);

function ServiceUpdate() {
    return (
        <>
            <h2 className={cx('title')}>Update service</h2>

            <form>
                <div className="mb-3">
                    <label className={cx('form-label')}>Tên dịch vụ</label>
                    <input type="text" className={cx('form-control', 'custom-input')} name="name" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Diện tích sử dụng</label>
                    <input type="number" className={cx('form-control', 'custom-input')} name="usable_area" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Chi phí thuê</label>
                    <input type="number" className={cx('form-control', 'custom-input')} name="rental_cost" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Số lượng khách hàng</label>
                    <input type="number" className={cx('form-control', 'custom-input')} name="max_guest" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Kiểu thuê</label>
                    <input type="text" className={cx('form-control', 'custom-input')} name="type" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Dịch vụ đi kèm</label>
                    <input type="text" className={cx('form-control', 'custom-input')} name="free_service" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Image URL</label>
                    <input type="text" className={cx('form-control', 'custom-input')} name="img" />
                </div>
                <Button to={config.routes.service} outline small>
                    Close
                </Button>
                <Button type="submit" primary small>
                    Save
                </Button>
            </form>
        </>
    );
}

export default ServiceUpdate;
