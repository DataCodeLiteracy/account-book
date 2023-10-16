import AccountItemFilter from './AccountItemFilter';
import AccountItemList from './AccountItemList';
import './AccountItem.css';

const AccountItem = ({
	items,
	filteredItems,
	type,
	handleDelete,
	typeChangeHandler,
	filterHandler,
	dateSelectHandler,
}) => {
	return (
		<div className="account-item">
			<AccountItemFilter
				typeChangeHandler={typeChangeHandler}
				filterHandler={filterHandler}
				dateSelectHandler={dateSelectHandler}
			/>
			<AccountItemList
				items={items}
				filteredItems={filteredItems}
				type={type}
				handleDelete={handleDelete}
				typeChangeHandler={typeChangeHandler}
			/>
		</div>
	);
};

export default AccountItem;
