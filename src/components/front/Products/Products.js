import React from "react";
import "./Products.css";

const Products = ({ productItems, handleAddProduct, handleRemoveProduct }) => {
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="card">
          <div>
            <img
              className="product-image"
              src={productItem.image}
              alt={productItem.title}
            />
          </div>

          <div className="product.name">
            <h3>{productItem.title}</h3>
          </div>

          {/* <div className="product.description">
            <h3>{productItem.description}</h3>
          </div> */}
          <div className="product.category">
            <h3>{productItem.category}</h3>
          </div>

          <div className="product.price">${productItem.price}</div>

          <div className="rating-container">
            <div className="product.rating">
              rating : {productItem.rating.rate}
            </div>
            <div className="product.rating">
              Count : {productItem.rating.count}
            </div>
          </div>

          <div>
            <button 
            className="product-add-button"
            onClick={()=>handleAddProduct(productItem)}>
            Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
