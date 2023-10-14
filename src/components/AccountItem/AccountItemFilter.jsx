import './AccountItemFilter.css';

const AccountItemFilter = () => {
	return (
		<section className="account-item--filter">
			<div>
				<select name="type" id="type">
					<option value="food">식료품</option>
					<option value="kitchen">주방용품</option>
					<option value="car">차량용품</option>
					<option value="frozen-food">냉동식품</option>
				</select>
			</div>
			<div>
				<select name="filter" id="filter">
					<option value="high-price">가격 높은 순</option>
					<option value="low-price">가격 낮은 순</option>
					<option value="latest">최신 순</option>
					<option value="old">오래된 순</option>
				</select>
			</div>
			<div>
				<input type="date" />
			</div>
			<div>
				<input type="date" />
			</div>
		</section>
	);
};

export default AccountItemFilter;
