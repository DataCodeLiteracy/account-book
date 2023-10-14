import './AccountForm.css';

const AccountForm = () => {
	return (
		<form className="account-form">
			<div>
				<label htmlFor="name">이름</label>
				<input type="text" id="name" />
			</div>
			<div>
				<label htmlFor="price">가격</label>
				<input type="text" id="price" />
			</div>
			<div>
				<label htmlFor="type">유형</label>
				<select name="type" id="type">
					<option value="food">식료품</option>
					<option value="kitchen">주방용품</option>
					<option value="car">차량용품</option>
					<option value="frozen-food">냉동식품</option>
				</select>
			</div>
			<div>
				<label htmlFor="date">구입 날짜</label>
				<input type="date" id="date" />
			</div>
			<div>
				<label htmlFor="memo">메모</label>
				<div>
					<input type="checkbox" />
					<span>메모 작성</span>
					<input type="text" id="memo" />
				</div>
			</div>
			<div>
				<label htmlFor="repurchase">재구매 의사</label>
				<div>
					<input type="radio" />
					<span>한다</span>
					<input type="radio" />
					<span>안한다</span>
				</div>
			</div>
		</form>
	);
};

export default AccountForm;
