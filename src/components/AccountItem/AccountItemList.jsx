import './AccountItemList.css';
import AccountItemProduct from './AccountItemProduct';

const AccountItemList = (props) => {
	return (
		<section className="account-item-list">
			{props.filteredItems.map((item) => (
				<AccountItemProduct
					key={item.id}
					id={item.id}
					date={item.date}
					name={item.name}
					memo={item.memo}
					price={item.price}
					handleDelete={props.handleDelete}
				/>
			))}
		</section>
	);
};

export default AccountItemList;
