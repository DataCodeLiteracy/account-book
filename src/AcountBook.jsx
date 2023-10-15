import { useState } from 'react';
import AccountForm from './components/AccountForm/AccountForm';
import AccountItem from './components/AccountItem/AccountItem';

const AccountBook = () => {
	const [itemList, setItemList] = useState([]);

	const getFormData = (data) => {
		setItemList([data, ...itemList]);
	};

	const handleDelete = (id) => {
		setItemList(itemList.filter((item) => item.id !== id));
	};

	return (
		<div>
			<AccountForm getFormData={getFormData} />
			<AccountItem items={itemList} handleDelete={handleDelete} />
		</div>
	);
};

export default AccountBook;
