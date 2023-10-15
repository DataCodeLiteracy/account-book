import AccountItemFilter from './AccountItemFilter';
import AccountItemList from './AccountItemList';
import './AccountItem.css';

const AccountItem = ({ items, handleDelete, typeFilterHandler, filterHandler }) => {
	return (
		<div className="account-item">
			<AccountItemFilter typeFilterHandler={typeFilterHandler} filterHandler={filterHandler} />
			<AccountItemList items={items} handleDelete={handleDelete} />
		</div>
	);
};

export default AccountItem;
