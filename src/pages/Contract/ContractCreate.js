import classNames from 'classnames/bind';
import styles from './Contract.module.scss';
import Button from '~/components/Button/Button';
import config from '~/config';

const cx = classNames.bind(styles);

function ContractCreate() {
    return (
        <>
            <h2 className={cx('title')}>Create contract</h2>
            <form>
                <div className="mb-3">
                    <label className={cx('form-label')}>Mã hợp đồng</label>
                    <input type="text" className={cx('form-control', 'custom-input')} name="code" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Tên khách hàng</label>
                    <input type="number" className={cx('form-control', 'custom-input')} name="customer" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Tên dịch vụ</label>
                    <input type="number" className={cx('form-control', 'custom-input')} name="service" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Ngày bắt đầu</label>
                    <input type="number" className={cx('form-control', 'custom-input')} name="begin_date" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Ngày kết thúc</label>
                    <input type="text" className={cx('form-control', 'custom-input')} name="end_date" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Số tiền cọc trước</label>
                    <input type="text" className={cx('form-control', 'custom-input')} name="deposit" />
                </div>
                <div className="mb-3">
                    <label className={cx('form-label')}>Tổng số tiền thanh toán</label>
                    <input type="text" className={cx('form-control', 'custom-input')} name="total_money" />
                </div>
                <Button to={config.routes.contract} outline small>
                    Close
                </Button>
                <Button type="submit" primary small>
                    Save
                </Button>
            </form>
        </>
    );
}

export default ContractCreate;
