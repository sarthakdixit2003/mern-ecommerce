import './ProductDetails.css';

const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <img src="https://as1.ftcdn.net/v2/jpg/03/02/03/12/1000_F_302031226_1xmJVuH0ogmwOtR3OYgMHnStyHdiVnWM.jpg" alt="Product Image" className="product-image" />

      <div className="product-info">
        <h1>Handwoven Alpaca Wool Sweater</h1>
        <div className="product-price">
          <span className="badge text-bg-success">4.5 <i className="fa-solid fa-star"></i></span>
          <span>₹ 800.00</span>
        </div>
        <p className="product-description">Indulge in the warmth and luxury of our handwoven alpaca wool sweater, a true testament to artisan craftsmanship. Each sweater is meticulously crafted by skilled hands, showcasing the timeless art of handweaving. The alpaca wool used in this sweater is renowned for its exceptional softness, lightweight feel, and insulating properties.</p>
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