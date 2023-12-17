import './Footer.css';

const Footer = () => (
	<div className="footer">
		<div className="footer__column">
			<h4>Exclusive</h4>
			<ul>
				<li>Subscribe</li>
				<li>Get 10% off</li>
			</ul>
		</div>
		<div className="footer__column">
			<h4>Support</h4>
			<ul>
				<li>Contact: info@example.com</li>
				<li>Phone: +1 (555) 555-5555</li>
			</ul>
		</div>
		<div className="footer__column">
			<h4>Account</h4>
			<ul>
				<li>My Account</li>
				<li>Login / Register</li>
				<li>Cart</li>
				<li>Wishlist</li>
				<li>Shop</li>
			</ul>
		</div>
		{/* Add the remaining two columns based on your specifications */}
		<div className="footer__column">
			<h4>Quick Link</h4>
			<ul>
				<li>Privacy Policy</li>
				<li>Terms Of Use</li>
				<li>FAQ</li>
				<li>Contact</li>
			</ul>
		</div>
		<div className="footer__column">
			<h4>Follow Us</h4>
			<div className="footer__groupIcon">
				<i className="fa-brands fa-facebook-f footer__icon"></i>
				<i class="fa-brands fa-twitter footer__icon"></i>
				<i class="fa-brands fa-instagram footer__icon"></i>
				<i class="fa-brands fa-linkedin-in footer__icon"></i>
			</div>
		</div>
	</div>
);

export default Footer