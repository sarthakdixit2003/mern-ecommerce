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
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus sapien eu neque sagittis, ut ullamcorper lectus condimentum. Duis ac vehicula justo. Donec auctor mauris ut turpis faucibus faucibus. Duis ullamcorper quam eu mauris luctus, a ullamcorper lectus scelerisque.</p>
					<p>Maecenas vitae eros a turpis tincidunt ullamcorper. Donec ac odio euismod, scelerisque lectus ac, accumsan libero. Nam faucibus ornare lectus, ac tristique mauris semper vel.</p>
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