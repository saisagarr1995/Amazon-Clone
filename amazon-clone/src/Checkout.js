import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from "./CheckoutProduct";


import imageAd from './Images/checkoutImageAd.jpg'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">

                <img className="checkout__ad"
                    src={imageAd}
                    alt="Amazon-Ad"
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Cart is empty</h2>
                        <p>
                            You have no items in your cart. to buy one or more items click "Add to Cart" next to the item
                        </p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Cart</h2>
                            {/* Going to list all checkout products */}
                            {basket?.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating} />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
