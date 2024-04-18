import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProductDetails.css';
import img1 from '../../assets/laptop1.jpg';
import img2 from '../../assets/phone1.jpg';
import img3 from '../../assets/headphones1.jpg';
import img4 from '../../assets/tshirt1.jpg';
import img5 from '../../assets/watch1.jpg';
import img6 from '../../assets/camera1.jpg';
import img7 from '../../assets/sofa1.jpg';
import img8 from '../../assets/coffee1.jpg';


const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const {id}=useParams();
  // console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/server/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data.data);
        console.log(data.data);
      })
  }, [])

  const images={'6617b265a266873b8e75fa1b': img1, '6617d111a266873b8e75fa1d': img2, '6617dd3b105d1da9228f9155': img3, '6617dd56105d1da9228f9156': img4, '6617dd66105d1da9228f9157': img5, '6617dd78105d1da9228f9158': img6, '6617dd8a105d1da9228f9159': img7, '6617dd99105d1da9228f915a': img8}
  // console.log(product._id)
  return (
    <div className="product-details-container">
      <img src={images[id]} alt="Product Image" className="product-image" />

      <div className="product-info">
        <h1>{product.name}</h1>
        <div className="product-price">
          <span className="badge text-bg-success">{product.rating} <i className="fa-solid fa-star"></i></span>
          <span>{`₹ ${product.price}`}</span>
        </div>
        <p className="product-description">{product.description}</p>
        <button className="productAddCartButton">Add To Cart</button>
        <div className="product-icon-container">
          <div className="product-card">
            <span><i className="fa-solid fa-truck-fast"></i></span>
            <div className="product-icon-body">
              <h5>Free and Fast Delivery</h5>
              <p>Free Delivery For All Orders Above ₹500</p>
            </div>
          </div>
          <div className="product-card">
            <span><i className="fa-solid fa-headphones"></i></span>
            <div className="product-icon-body">
              <h5>24/7 Customer Service</h5>
              <p>Friendly 24/7 Customer Support</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;