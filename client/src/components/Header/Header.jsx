import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
	<header className="header">
		<div className="header__menu">
			<button className="btn btn-primary transparent-background" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className="fas fa-bars"></i></button>
			<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Shop By Category</h5>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body">
					{/* accordion for categories */}
					<div className="accordion accordion-flush" id="accordionFlushExample">
						<div className="accordion-item">
							<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
									Handicrafts and Handlooms
								</button>
							</h2>
							<div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									<ul>
										<li>Traditional Textiles</li>
										<li>Handwoven Garments</li>
										<li>Pottery and Ceramics</li>
										<li>Handcrafted Jewelry</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="accordion-item">
							<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
									Art and Culture
								</button>
							</h2>
							<div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									<ul>
										<li>Paintings and Artworks</li>
										<li>Traditional Artifacts</li>
										<li>Cultural Merchandise</li>
										<li>Folk Art-Inspired Products</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="accordion-item">
							<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
									Handmade Jewelry
								</button>
							</h2>
							<div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									<ul>
										<li>Unique Traditional Jewelry</li>
										<li>Gemstone Jewelry</li>
										<li>Terracotta and Clay Jewelry</li>
										<li>Tribal Jewelry</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="accordion-item">
							<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
									Handmade Footwear
								</button>
							</h2>
							<div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									<ul>
										<li>Traditional Footwear Styles</li>
										<li>Handcrafted Leather Goods</li>
										<li>Artisanal Sandals and Shoes</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="accordion-item">
							<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
									Handloom Textiles
								</button>
							</h2>
							<div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									<ul>
										<li>Local Weaving Traditions</li>
										<li>District-Specific Textiles</li>
										<li>Handwoven Sarees and Fabrics</li>
										<li>Traditional Clothing Items</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="accordion-item">
							<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
									Wooden Crafts
								</button>
							</h2>
							<div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									<ul>
										<li>Hand-Carved Wooden Items</li>
										<li>Traditional Furniture</li>
										<li>Wooden Toys and Artifacts</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="accordion-item">
							<h2 className="accordion-header">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
									Metal Crafts
								</button>
							</h2>
							<div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body">
									<ul>
										<li>Brass and Copperware</li>
										<li>Metal Sculptures</li>
										<li>Traditional Metal Handicrafts</li>
									</ul>
								</div>
							</div>
						</div>

					</div>
					{/* accordion for categories */}

				</div>
			</div>
		</div>
		<div className="header__logo">
			<img src='/images/logo.jpg' alt="My Image" className='header__logo-img' />
		</div>
		<nav className="header__nav">
			<Link to="/" className='header__nav-link'>Home</Link>
			<Link to="/" className='header__nav-link'>Contact</Link>
			<Link to="/about" className='header__nav-link'>About</Link>
			<Link to="/signup" className='header__nav-link'>Sign Up</Link>
		</nav>
		<div className="header__actions">
			<div className="header__search">
				<input type="text" placeholder="Search products..." /><i className="headerIcn fa-solid fa-magnifying-glass"></i>
			</div>
			<Link to="/wishlist"><i className="header__wishlist fa-regular fa-heart"></i></Link>
			<Link to="/cart"><i className="header__cart fa-solid fa-cart-shopping"></i></Link>
		</div>
	</header>
);

export default Header;