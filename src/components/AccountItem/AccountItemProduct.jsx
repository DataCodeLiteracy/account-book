const AccountItemProduct = (item) => {
	return (
		<div className="account-item-list--product">
			<div>
				<div className="item-list--product__date">{item.date}</div>
				<div className="item-list--product__name">{item.name}</div>
			</div>
			<div className="item-list--product__memo">{item.memo}</div>
			<div className="item-list--product__price">{item.price}</div>
			<button className="deleteBtn">삭제</button>
		</div>
	);
};

export default AccountItemProduct;
