import { useEffect, useState } from 'react';
import AccountForm from './components/AccountForm/AccountForm';
import AccountItem from './components/AccountItem/AccountItem';

const AccountBook = () => {
	const [itemList, setItemList] = useState([]);

	const lastOrder = itemList.length > 0 ? itemList[itemList.length - 1].order : 0;

	const saveItemsToLocalStorage = (items) => {
		localStorage.setItem('itemList', JSON.stringify(items));
	};

	console.log(itemList);

	const loadItemsFromLocalStorage = () => {
		const storedItems = localStorage.getItem('itemList');
		if (storedItems) {
			const items = JSON.parse(storedItems);
			setItemList(items);
		} else {
			setItemList([]);
		}
	};

	useEffect(() => {
		loadItemsFromLocalStorage();
	}, []);

	const getFormData = (data) => {
		const updatedItems = [data, ...itemList];
		setItemList(updatedItems);
		saveItemsToLocalStorage(updatedItems);
	};

	const handleDelete = (id) => {
		const updatedItems = itemList.filter((item) => item.id !== id);
		setItemList(updatedItems);
		saveItemsToLocalStorage(updatedItems);
	};

	const typeFilterHandler = (type) => {
		let filteredItems;

		if (type === 'all') {
			filteredItems = itemList;
		} else {
			filteredItems = itemList.filter((item) => item.type === type);
		}

		setItemList(filteredItems);
	};

	const filterHandler = (filter) => {
		if (filter === 'high-price') {
			itemList.sort((a, b) => b.price - a.price);
			setItemList([...itemList]);
		} else if (filter === 'low-price') {
			itemList.sort((a, b) => a.price - b.price);
			setItemList([...itemList]);
		} else if (filter === 'latest') {
			itemList.sort((a, b) => b.order - a.order);
			setItemList([...itemList]);
		} else if (filter === 'old') {
			itemList.sort((a, b) => a.order - b.order);
			setItemList([...itemList]);
		}
	};

	return (
		<div>
			<AccountForm getFormData={getFormData} lastOrder={lastOrder} />
			<AccountItem
				items={itemList}
				handleDelete={handleDelete}
				typeFilterHandler={typeFilterHandler}
				filterHandler={filterHandler}
			/>
		</div>
	);
};

export default AccountBook;
