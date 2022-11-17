import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../Shop/componentsShop/ItemCart/ItemCart";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	const order = {
		buyer: {
			name: "Mai",
			email: "mairapinetta@gmail.com",
			phone: "1122489039",
			address: "jj",
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};

	if (cart.length === 0) {
		return (
			<>
				<p>Empty Cart</p>
				<Link to="/shop">Shop</Link>
			</>
		);
	}

	return (
		<main>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p>total: {totalPrice()}</p>
			<button onClick={handleClick}>Finish shooping</button>
		</main>
	);
};

export default Cart;
