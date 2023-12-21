import './About.css';

const About = () => {
	return (
		<>
			<div className="about-container">
				<div className="about-image">
					<img src="https://media.istockphoto.com/id/1004801546/photo/friends-in-the-mall.jpg?s=2048x2048&w=is&k=20&c=4zz2oh6Yu96naXchIQj4HQAElf5E9Q5UWhnOPt4Jmyc=" alt="About us image" />
				</div>
				<div className="about-text">
					<h2>Our Story</h2>
					<p>
						🌟 Our Story: A Journey of Artistry and Tradition
						Welcome to CraftHubb, where every product tells a story - a story of skilled hands, timeless traditions, and the love for craftsmanship.
						In the heart of India, where art and culture intertwine, our journey begins. Born out of a passion for preserving and promoting traditional crafts, we embarked on a mission to bring the beauty of handcrafted treasures to the world.
					</p>
					<p>The Artisan's Touch:
						Our artisans, the backbone of our brand, hail from diverse communities, each with a unique craft passed down through generations. From the intricate patterns of handwoven textiles to the delicate artistry of ceramics, and the enduring elegance of metal crafts - every piece in our collection reflects the dedication and expertise of these master craftsmen.
					</p>
					<button className="about-cta">Learn More</button>
				</div>
			</div>
			<div className="aboutCardContainer">
				<div className="about-card">
					<span><i className="fa-solid fa-truck-fast"></i></span>
					<h5>Free and Fast Delivery</h5>
					<p>Free Delivery For All Orders Above ₹500</p>
				</div>
				<div className="about-card">
					<span><i className="fa-solid fa-headphones"></i></span>
					<h5>24/7 Customer Service</h5>
					<p>Friendly 24/7 Customer Support</p>
				</div>
				<div className="about-card">
					<span><i className="fa-regular fa-square-check"></i></span>
					<h5>Money Back Guarantee</h5>
					<p>100% Money Back Within 30 Days</p>
				</div>
			</div>
		</>
	);
};

export default About;