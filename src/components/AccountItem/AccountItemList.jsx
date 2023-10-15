import './AccountItemList.css';
import AccountItemProduct from './AccountItemProduct';

const AccountItemList = (props) => {
	console.log(props.items.map((item) => item.id));
	return (
		<section className="account-item-list">
			{props.items.map((item) => (
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
