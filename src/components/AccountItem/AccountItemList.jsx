import './AccountItemList.css';
import AccountItemProduct from './AccountItemProduct';

const AccountItemList = ({ items }) => {
	return (
		<section className="account-item-list">
			{items.map((item) => (
				<AccountItemProduct key={item.id} date={item.date} name={item.name} memo={item.memo} price={item.price} />
			))}
		</section>
	);
};

export default AccountItemList;
