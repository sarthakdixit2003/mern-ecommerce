import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';
import { useState, useEffect } from 'react';

const ProductList = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/server/products/`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				setProducts(data.data);
			})
			.catch(err => console.log(err))
	}, []);
	let i=0;
	return (
		<div className="productList-container">
			<div className="productListTitle"><i className="fa-solid fa-bullhorn"></i> Explore Our Products</div>
			<div className="productListItems">
				{products.map((product) => (
					<ProductCard i={i++} key={product._id} product={product}/>
				))}
			</div>
			<button className="productListBtn">View All</button>
		</div>
	);
};

export default ProductList