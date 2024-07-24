import React from "react";
import "../styles/Local.css";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className="header__top">
            <div className="top__header">
            <FontAwesomeIcon className="hamburger__menu" icon={faBars} />
            <h1 className="header__title">Barney</h1>
            <img className="header__lock" src="https://cdn.shopify.com/s/files/1/0092/3136/8270/files/bag.svg?v=1690927034"/>
            </div>
            <div className="header__links">
            <p>Home</p>
            <p>Dog Beds</p>
            <p>Cover & Kits</p>
            <p>Blankets</p>
            <p>Furfy</p>
            <p>Gift Cards</p>
            <p>Shop All</p>
            <p>Shipping</p>
            <p>Care & Washing</p>
            <p>Reviews</p>
            <p>Videos</p>
            <p>FAQS</p>
            <p>Our Story</p>
            <p>Contact</p>
            </div>
        </div>
    )
}

export default Header;