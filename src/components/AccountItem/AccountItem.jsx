import AccountItemFilter from './AccountItemFilter';
import AccountItemList from './AccountItemList';
import './AccountItem.css';

const AccountItem = ({ items }) => {
	return (
		<div className="account-item">
			<AccountItemFilter />
			<AccountItemList items={items} />
		</div>
	);
};

export default AccountItem;
