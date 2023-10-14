import { useState } from 'react';
import AccountForm from './components/AccountForm/AccountForm';
import AccountItem from './components/AccountItem/AccountItem';

const AccountBook = () => {
	const [itemList, setItemList] = useState([]);

	const getFormData = (data) => {
		setItemList([...itemList, data]);
	};

	return (
		<div>
			<AccountForm getFormData={getFormData} />
			<AccountItem items={itemList} />
		</div>
	);
};

export default AccountBook;
