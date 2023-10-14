import './AccountItemList.css';

const AccountItemList = () => {
	return (
		<section className="account-item-list">
			<div className="account-item-list--product">
				<div>
					<div className="item-list--product__date">2023.10.12</div>
					<div className="item-list--product__name">물티슈</div>
				</div>
				<div className="item-list--product__memo">메모.............</div>
				<div className="item-list--product__price">2000</div>
			</div>
		</section>
	);
};

export default AccountItemList;
