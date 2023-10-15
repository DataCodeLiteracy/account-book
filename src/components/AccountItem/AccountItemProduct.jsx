const AccountItemProduct = (props) => {
	const { id, date, name, memo, price, handleDelete } = props;
	return (
		<div className="account-item-list--product">
			<div>
				<div className="item-list--product__date">{date}</div>
				<div className="item-list--product__name">{name}</div>
			</div>
			<div className="item-list--product__memo">{memo}</div>
			<div className="item-list--product__price">{price}</div>
			<button className="deleteBtn" onClick={() => handleDelete(id)}>
				삭제
			</button>
		</div>
	);
};

export default AccountItemProduct;
