import React from 'react';
import AmazonBackgroungImage from "./Images/AmazonBackgroungImage.jpg"
import './Home.css';
import Product from "./Product"

import ProductOneElonMask from "./Images/ProductOneElonMask.jpg"
import Iphone12 from "./Images/ProductTwoIphone12.jpg"
import MacBook from "./Images/ProductThreeMacBook.jpg"
import ProductFourPan from "./Images/ProductFourPan.jpg"
import samsungTv from "./Images/ProductFiveSamsungTv.jpg"
import mixer from "./Images/ProductSixMixer.jpg"

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src={AmazonBackgroungImage}
                alt="Amazon Home Background"
            />
            {/* Product id, title, price, rating, image*/}
            <div className="home__row">
                <Product
                    id="123345"
                    title="Elon Mask"
                    price={150.54}
                    rating={5}
                    image={ProductOneElonMask}
                />
                <Product
                    id="1233456"
                    title="Iphone12"
                    price={45000.00}
                    rating={5}
                    image={Iphone12}
                />
            </div>
            <div className="home__row">
                <Product
                    id="123345"
                    title="MacBook air"
                    price={13000.02}
                    rating={5}
                    image={MacBook}
                />
                <Product
                    id="1233465"
                    title="Pan"
                    price={300.00}
                    rating={5}
                    image={ProductFourPan}
                />
                <Product
                    id="1233465"
                    title="Mixer"
                    price={2000.00}
                    rating={5}
                    image={mixer}
                />
            </div>
            <div className="home__row">
                <Product
                    id="123345"
                    title="Samsung Tv"
                    price={70000.00}
                    rating={5}
                    image={samsungTv}
                />
            </div>
        </div>
    )


}

export default Home

