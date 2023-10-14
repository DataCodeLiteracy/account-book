import { useState } from 'react';
import './AccountForm.css';

const AccountForm = ({ getFormData }) => {
	const [formData, setFormData] = useState({
		id: 0,
		name: '',
		price: 0,
		type: 'food',
		date: new Date().toISOString().split('T')[0],
		memo: '',
		repurchase: true,
	});

	const inputHandler = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	};

	const selectHandler = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setFormData({
			id: Math.random(),
			name: formData.name,
			price: formData.price,
			type: formData.type,
			date: formData.date,
			memo: formData.memo,
			repurchase: true,
		});

		getFormData(formData);
	};

	return (
		<form className="account-form" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">이름</label>
				<input type="text" id="name" onChange={inputHandler} value={formData.name} />
			</div>
			<div>
				<label htmlFor="price">가격</label>
				<input type="text" id="price" onChange={inputHandler} value={formData.price} />
			</div>
			<div>
				<label htmlFor="type">유형</label>
				<select name="type" id="type" onChange={selectHandler}>
					<option value="food">식료품</option>
					<option value="kitchen">주방용품</option>
					<option value="car">차량용품</option>
					<option value="frozen-food">냉동식품</option>
				</select>
			</div>
			<div>
				<label htmlFor="date">구입 날짜</label>
				<input type="date" id="date" onChange={inputHandler} value={formData.date} />
			</div>
			<div>
				<label htmlFor="memo">메모</label>
				<div>
					<input type="checkbox" id="checkbox" onChange={inputHandler} />
					<span>메모 작성</span>
					<input type="text" id="memo" onChange={inputHandler} value={formData.memo} />
				</div>
			</div>
			<div>
				<label htmlFor="repurchase">재구매 의사</label>
				<div>
					<input type="radio" id="true" onChange={inputHandler} />
					<span>한다</span>
					<input type="radio" id="false" onChange={inputHandler} />
					<span>안한다</span>
				</div>
			</div>
			<button className="submit-button" type="submit">
				등록
			</button>
		</form>
	);
};

export default AccountForm;
