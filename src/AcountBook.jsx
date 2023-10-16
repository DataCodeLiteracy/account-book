import { useEffect, useState } from 'react';
import AccountForm from './components/AccountForm/AccountForm';
import AccountItem from './components/AccountItem/AccountItem';

const AccountBook = () => {
	const [itemList, setItemList] = useState([]);
	const [type, setType] = useState('all');
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const dateSelectHandler = (dateId, dateValue) => {
		if (dateId === 'startDate') {
			setStartDate(dateValue);
		} else if (dateId === 'endDate') {
			setEndDate(dateValue);
		}
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
		filteredItems = JSON.parse(localStorage.getItem('itemList'));
		const filteredByDate = filteredItems.filter((item, index) => {
			if (startDate && endDate) {
				const itemDate = new Date(item.date);
				const startDateValue = new Date(startDate);
				const endDateValue = new Date(endDate);
				return itemDate >= startDateValue && itemDate <= endDateValue;
			}
			return true;
		});
		setItemList(filteredByDate);
	}, [startDate, endDate]);

	const lastOrder = itemList.length > 0 ? itemList[itemList.length - 1].order : 0;

	const saveItemsToLocalStorage = (items) => {
		localStorage.setItem('itemList', JSON.stringify(items));
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

	const typeChangeHandler = (selectedType) => {
		setType(selectedType);
		return type;
	};

	let filteredItems = itemList.filter((item) => {
		if (type === 'all') {
			return true;
		}
		return item.type === type;
	});

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
				filteredItems={filteredItems}
				type={type}
				handleDelete={handleDelete}
				typeChangeHandler={typeChangeHandler}
				filterHandler={filterHandler}
				dateSelectHandler={dateSelectHandler}
			/>
		</div>
	);
};

export default AccountBook;
