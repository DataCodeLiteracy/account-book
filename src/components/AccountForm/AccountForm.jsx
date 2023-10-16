import { useRef, useState } from 'react';
import './AccountForm.css';
import { useEffect } from 'react';

const AccountForm = ({ getFormData, lastOrder }) => {
	const [formData, setFormData] = useState({
		id: new Date(),
		name: '',
		price: 0,
		type: '',
		date: new Date().toISOString().split('T')[0],
		memo: '',
		order: lastOrder + 1,
	});
	const [isSubmit, setIsSubmit] = useState(false);
	const [isMemoChecked, setIsMemoChecked] = useState(false);
	const [isRadio, setIsRadio] = useState(true);

	const nameRef = useRef(null);
	const memoRef = useRef(null);

	const inputHandler = (e) => {
		const { id, type, value } = e.target;

		if (isSubmit) {
			setFormData({
				id: new Date(),
				name: '',
				price: 0,
				type: formData.type,
				date: new Date().toISOString().split('T')[0],
				memo: '',
				order: formData.order,
			});
			setIsSubmit(false);
		} else {
			if (isMemoChecked) {
				setFormData({ ...formData, memo: value });
			}

			if (id !== 'memo') {
				setFormData({ ...formData, [id]: value });
			}

			if (type === 'radio') {
				if (id === 'true') {
					setIsRadio(true);
				} else {
					setIsRadio(false);
				}
			}
		}
	};

	const selectHandler = (e) => {
		const { id, value } = e.target;
		console.log(value);
		setFormData({ ...formData, [id]: value });
	};

	const checkInputHandler = (e) => {
		const checked = e.target.checked;
		checked === true ? setIsMemoChecked(true) : setIsMemoChecked(false);
	};

	useEffect(() => {
		isMemoChecked && memoRef.current.focus();
	}, [isMemoChecked]);

	const handleSubmit = (e) => {
		e.preventDefault();

		localStorage.setItem('selectedType', formData.type);

		setFormData({
			id: new Date(),
			name: formData.name,
			price: formData.price,
			type: formData.type,
			date: formData.date,
			memo: formData.memo,
			order: formData.order + 1,
		});

		getFormData(formData);

		setIsSubmit(true);
		nameRef.current.focus();
	};

	useEffect(() => {
		const selectedType = localStorage.getItem('selectedType');
		if (selectedType) {
			setFormData({ ...formData, type: selectedType });
		}
	}, []);

	return (
		<form className="account-form" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">이름</label>
				<input type="text" id="name" onChange={inputHandler} value={isSubmit ? '' : formData.name} ref={nameRef} />
			</div>
			<div>
				<label htmlFor="price">가격</label>
				<input type="text" id="price" onChange={inputHandler} value={isSubmit ? 0 : formData.price} />
			</div>
			<div>
				<label htmlFor="type">유형</label>
				<select name="type" id="type" onChange={selectHandler}>
					<option value="food">식료품</option>
					<option value="kitchen">주방용품</option>
					<option value="living">생활용품</option>
					<option value="frozen-food">냉동식품</option>
				</select>
			</div>
			<div>
				<label htmlFor="date">구입 날짜</label>
				<input
					type="date"
					id="date"
					onChange={inputHandler}
					value={isSubmit ? new Date().toISOString().split('T')[0] : formData.date}
				/>
			</div>
			<div>
				<label htmlFor="memo">메모</label>
				<div>
					<input
						type="checkbox"
						id="checkbox"
						value={isMemoChecked}
						onChange={checkInputHandler}
						checked={isMemoChecked}
					/>
					<span>메모 작성</span>
					{isMemoChecked && (
						<input type="text" id="memo" onChange={inputHandler} value={isSubmit ? '' : formData.memo} ref={memoRef} />
					)}
				</div>
			</div>
			<div>
				<label htmlFor="repurchase">재구매 의사</label>
				<div>
					<input type="radio" id="true" value={true} onChange={inputHandler} checked={isRadio} />
					<span>한다</span>
					<input type="radio" id="false" value={false} onChange={inputHandler} checked={!isRadio} />
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
