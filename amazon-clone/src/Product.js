import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
// import ProductOneElonMask from "./Images/ProductOneElonMask.jpg"

function Product({ id, title, price, rating, image }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating

            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
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
            <button onClick={addToBasket}>Add to cart</button>
        </div>
    )
}

export default Product
