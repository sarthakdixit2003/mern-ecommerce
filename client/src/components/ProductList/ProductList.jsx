import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  return (
		<div className="productList-container">
			<div className="productListTitle"><i className="fa-solid fa-bullhorn"></i> Explore Our Products</div>
			<div className="productListItems">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
			<button class="productListBtn">View All</button>
		</div>
  );
};

export default ProductList