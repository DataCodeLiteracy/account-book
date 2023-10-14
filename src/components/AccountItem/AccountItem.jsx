import AccountItemFilter from './AccountItemFilter';
import AccountItemList from './AccountItemList';
import './AccountItem.css';

const AccountItem = () => {
	return (
		<div className="account-item">
			<AccountItemFilter />
			<AccountItemList />
		</div>
	);
};

export default AccountItem;
