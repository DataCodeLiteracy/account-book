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
	dateFilterHandler,
}) => {
	return (
		<div className="account-item">
			<AccountItemFilter
				typeChangeHandler={typeChangeHandler}
				filterHandler={filterHandler}
				dateFilterHandler={dateFilterHandler}
			/>
			<AccountItemList
				items={items}
				type={type}
				filteredItems={filteredItems}
				handleDelete={handleDelete}
				typeChangeHandler={typeChangeHandler}
			/>
		</div>
	);
};

export default AccountItem;
