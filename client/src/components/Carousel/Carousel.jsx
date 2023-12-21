import './Carousel.css';

const Carousel = () => (
	<>
		<div id="carouselExampleCaptions" className="carousel slide">
			<div className="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="https://as2.ftcdn.net/v2/jpg/03/13/64/27/1000_F_313642757_74cCIizBFxVh7eL8lqvmZz666N02sOxq.jpg" className="d-block w-60 mx-auto" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Pottery</h5>
							<p>Crafting Timeless Elegance: Unearth the Beauty of Handcrafted Pottery for Every Home</p>
						</div>
				</div>
				<div className="carousel-item">
					<img src="https://as1.ftcdn.net/v2/jpg/05/66/34/10/1000_F_566341036_f2mCzWyHi9I4aMOSSiy1XUUhvEqdUKJ1.jpg" className="d-block w-80 mx-auto" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Handicrafts</h5>
							<p>Elevate Your Space with Artisanal Touch: Unique Handcrafted Ceramics, Where Tradition Meets Modern Design</p>
						</div>
				</div>
				<div className="carousel-item">
					<img src="https://as2.ftcdn.net/v2/jpg/01/05/63/51/1000_F_105635124_TE7kTXbI13IKr0hGPP5rzT3sgWc3o7A8.jpg" className="d-block w-60 mx-auto" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Metal Crafts</h5>
							<p>Forged in Tradition, Crafted for Today: Explore the Artistry of Handmade Metal Crafts, A Symphony of Elegance and Craftsmanship</p>
						</div>
				</div>
			</div>
			<button className="carousel-control-prev custom-carousel-control" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next custom-carousel-control" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	</>

);

export default Carousel;