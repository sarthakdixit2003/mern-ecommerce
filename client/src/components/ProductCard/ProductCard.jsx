import { Link } from 'react-router-dom';
import './ProductCard.css';
import img1 from '../../assets/laptop1.jpg';
import img2 from '../../assets/phone1.jpg';
import img3 from '../../assets/headphones1.jpg';
import img4 from '../../assets/tshirt1.jpg';
import img5 from '../../assets/watch1.jpg';
import img6 from '../../assets/camera1.jpg';
import img7 from '../../assets/sofa1.jpg';
import img8 from '../../assets/coffee1.jpg';

const ProductCard = ({ i, product }) => {
	const images=[img1, img2, img3, img4, img5, img6, img7, img8]
	return (
		<div className="productCard">
			<img src={images[i]} className="productCardImg" alt="..." />
			<Link to={`/product/${product._id}`}><h5>{`${product.name}`}</h5></Link>
			<span className="badge text-bg-success productCardBadge">{`${product.rating} `} <i className="fa-solid fa-star"></i></span>
			<p>₹ {`${product.price}`}</p>
		</div>
	)
}

export default ProductCard