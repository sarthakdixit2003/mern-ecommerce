import ProductList from '../../components/ProductList/ProductList';
import './Wishlist.css';

const Wishlist = () => {
	return (
		<div className="wishlist-container">
			<h2 className="wishlist-title">Wishlist</h2>

			<button className="move-all-to-cart-button">
				Move All To Bag
			</button>

			<ul className="wishlist-items">
				<li className="wishlist-item">
					<div className="wishlist-item-img-container">
						<img src="https://www.shutterstock.com/shutterstock/photos/2282851381/display_1500/stock-photo-handmade-sweater-knitted-fabric-from-a-green-thread-on-a-brown-background-copy-space-2282851381.jpg" alt="..." className="wishlist-item-image" />
						<button className="add-to-cart-button">
							<i className="fa-solid fa-cart-shopping"></i>Add To Cart
						</button>
					</div>
					<div className="wishlist-item-details">
						<h3>Handwoven Sweater</h3>
						<p>₹ 800</p>
					</div>
				</li>

				<li className="wishlist-item">
					<div className="wishlist-item-img-container">
						<img src="https://www.shutterstock.com/shutterstock/photos/2282851381/display_1500/stock-photo-handmade-sweater-knitted-fabric-from-a-green-thread-on-a-brown-background-copy-space-2282851381.jpg" alt="..." className="wishlist-item-image" />
						<button className="add-to-cart-button">
							<i className="fa-solid fa-cart-shopping"></i>Add To Cart
						</button>
					</div>
					<div className="wishlist-item-details">
						<h3>Handwoven Sweater</h3>
						<p>₹ 800</p>

					</div>
				</li>
			</ul>
			<h2 className="wishlist-title">Just For You</h2>
			<ProductList />
		</div>
	);
};

export default Wishlist;