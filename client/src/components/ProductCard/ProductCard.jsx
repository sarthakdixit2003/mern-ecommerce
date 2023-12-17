import './ProductCard.css';

const ProductCard = () => {
	return (
		<div className="productCard">
			<img src="https://5.imimg.com/data5/SELLER/Default/2023/3/296471159/GQ/NY/MK/137384514/handmade-woodland-animals-felt-toy-set-deer-bear-fox-and-bunny-500x500.png" className="productCardImg" alt="..." />
			<h5>Crochet Handmade Rabbit</h5>
			<span className="badge text-bg-success productCardBadge">4.5 <i className="fa-solid fa-star"></i></span>
			<p>₹ 500</p>
		</div>
	)
}

export default ProductCard