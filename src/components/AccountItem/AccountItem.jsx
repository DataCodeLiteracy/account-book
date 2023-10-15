import AccountItemFilter from './AccountItemFilter';
import AccountItemList from './AccountItemList';
import './AccountItem.css';

const AccountItem = ({ items, handleDelete }) => {
	return (
		<div className="account-item">
			<AccountItemFilter />
			<AccountItemList items={items} handleDelete={handleDelete} />
		</div>
	);
};

export default AccountItem;
