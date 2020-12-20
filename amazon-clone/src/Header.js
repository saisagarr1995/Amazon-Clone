import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    // console.log(`Its>>>>>>>>${user}`)
    const login = () => {
        if (user) {

            auth.signOut();
        }
    }

    return (
        <nav className="header">
            {/* *In nav bar we will be having Logo on the left --->image tag*/}
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon logo"
                />
            </Link>

            {/* *search box */}
            <div
                className="header__search">
                <input
                    type="text"
                    className="header__searchInput" />
                <SearchIcon
                    className="header__searchIcon"
                />
            </div>

            {/* //*3 links 1.signIn 2.returns&order 3.prime member*/}
            <div className="header__nav">
                {/*//*1st Link */}
                <Link
                    to={!user && "/login"}
                    className="header__link">
                    <div
                        onClick={login}
                        className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                {/*//*2nd Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/*//*3rd Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>

            {/* Basket icon --> Shopping basket items -->Number of items in basket*/}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingCartIcon />
                    <span
                        className="header__optionLineTwo header_cartCount">{basket?.length}
                    </span>
                </div>
            </Link>

        </nav>
    );
}

export default Header
