import './AccountItemFilter.css';

const AccountItemFilter = ({ typeChangeHandler, filterHandler, dateFilterHandler }) => {
	const selectTypeHandler = (e) => {
		const { value } = e.target;
		typeChangeHandler(value);
	};

	const selectFilter = (e) => {
		const { id, value } = e.target;
		filterHandler(value);
		dateFilterHandler(id, value);
	};

	return (
		<section className="account-item--filter">
			<div>
				<select name="type" id="type" onChange={selectTypeHandler}>
					<option value="all">전체</option>
					<option value="food">식료품</option>
					<option value="kitchen">주방용품</option>
					<option value="living">생활용품</option>
					<option value="frozen-food">냉동식품</option>
				</select>
			</div>
			<div>
				<select name="filter" id="filter" onChange={selectFilter}>
					<option value="select">선택</option>
					<option value="high-price">가격 높은 순</option>
					<option value="low-price">가격 낮은 순</option>
					<option value="latest">최신 순</option>
					<option value="old">오래된 순</option>
				</select>
			</div>
			<div>
				<input type="date" id="startDate" onChange={selectFilter} />
			</div>
			<div>
				<input type="date" id="endDate" onChange={selectFilter} />
			</div>
		</section>
	);
};

export default AccountItemFilter;
