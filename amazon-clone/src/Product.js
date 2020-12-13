import React from 'react'
import './Product.css'
// import ProductOneElonMask from "./Images/ProductOneElonMask.jpg"

function Product({ id, title, price, rating, image }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price"></p>
                <small>₹</small>
                <strong>{price}</strong>

                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="productBook" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
