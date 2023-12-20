import './Cart.css';

const Cart = () => {
	return (
		<div className="cart-container">
			<div className="cart-header">
				<h2 className="cart-title">Cart</h2>
				<p className="cart-text">Your Item Summary</p>
			</div>
			<table className="cart-table">
				<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Subtotal</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><img src="https://www.shutterstock.com/shutterstock/photos/1912838317/display_1500/stock-photo-a-girl-in-a-warm-white-sweater-with-a-long-collar-the-collar-of-the-sweater-covers-the-mouth-and-1912838317.jpg" alt="img" className="cartImg"/>Handwoven Sweater Jacket</td>
						<td>₹ 750</td>
						<td>2</td>
						<td>₹ 1400</td>
						<td><i className="fa-solid fa-xmark cartIcon"></i></td>
					</tr>

					<tr>
						<td><img src="https://www.shutterstock.com/shutterstock/photos/1912838317/display_1500/stock-photo-a-girl-in-a-warm-white-sweater-with-a-long-collar-the-collar-of-the-sweater-covers-the-mouth-and-1912838317.jpg" alt="img" className="cartImg"/>Handwoven Sweater Jacket</td>
						<td>₹ 750</td>
						<td>2</td>
						<td>₹ 1400</td>
						<td><i className="fa-solid fa-xmark cartIcon"></i></td>
					</tr>

				</tbody>
			</table>
			<div className="cart-summary">
				<p className="subtotal">Subtotal: 1400</p>
				<p className="shipping">Shipping: Free</p>
				<p className="total">Total: 1400</p>
				<button className="checkout-button">Proceed to Checkout</button>
			</div>
		</div>
	);
};

export default Cart;