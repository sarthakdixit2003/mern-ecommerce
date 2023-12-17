import './Header.css';

const Header = () => (
	<header className="header">
		<div className="header__manu">
			<button className="btn btn-primary transparent-background" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="headerIcn fas fa-bars"></i></button>
			<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Shop By Category</h5>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body">
					<p>Try scrolling the rest of the page to see this option in action.</p>
				</div>
			</div>
		</div>
		<div className="header__logo">
			Your Logo Here
		</div>
		<nav className="header__nav">
			<a href="#" className="header__nav-link">Home</a>
			<a href="#" className="header__nav-link">Contact</a>
			<a href="#" className="header__nav-link">About</a>
			<a href="#" className="header__nav-link">Sign Up</a>
		</nav>
		<div className="header__actions">
			<div className="header__search">
				<input type="text" placeholder="Search products..." /><i className="headerIcn fa-solid fa-magnifying-glass"></i>
			</div>
			<button className="header__wishlist">
				<i className="headerIcn fa-regular fa-heart"></i>
			</button>
			<button className="header__cart">
				<i className="headerIcn fa-solid fa-cart-shopping"></i>
			</button>
		</div>
	</header>
);

export default Header;