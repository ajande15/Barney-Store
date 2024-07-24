import React from "react";
import "../styles/Local.css";
import "./Footer.css";
import applepay from "../images/applepay.png";
import americanexpress from "../images/americanexpress.png";
import googlepay from "../images/googlepay.png";
import mastercard from "../images/mastercard.png";
import paypal from "../images/paypal.png";
import visa from "../images/visa.png";

function Footer() {
  return (
    <div className="footer__section">
      <div className="section__footera">
        <div className="row">
          <b className="row__underlined">Barney Bed</b>
          <p>Contact</p>
          <p>Our Story</p>
          <p>Reviews</p>
          <p>Privacy</p>
          <p>Terms of Service</p>
        </div>
        <div className="row">
          <b className="row__underlined">Help & Support</b>
          <p>FAQ's</p>
          <p>Shipping</p>
          <p>Care & Washing</p>
          <p>Videos</p>
          <p>Returns Policy</p>
        </div>
        <div className="row">
          <b className="row__underlined">Locations</b>
          <p>North America $USD</p>
          <p>Australia & NZ $AUD</p>
        </div>
        <div className="row">
          <b className="row__underlined">Socials</b>
          <div className="social__icons">
          <img src="https://www.svgrepo.com/show/501193/facebook-boxed.svg"/>
          <img src="https://www.svgrepo.com/show/521711/instagram.svg"/>
          <img src="https://www.svgrepo.com/show/513089/youtube-168.svg"/>
          <img src="https://www.svgrepo.com/show/473806/tiktok.svg"/>
          </div>
        </div>
      </div>
      <div className="section__footerb">
        <div className="left__footerb">
        <p className="copyrightlogo">Barney Logo<br/>
        <span>© Copyright Barney Bed 2024</span>
        </p>
        </div>
        <div className="right__footerb">
        <img src={applepay}/>
        <img src={americanexpress}/>
        <img src={googlepay}/>
        <img src={mastercard}/>
        <img src={paypal}/>
        <img src={visa}/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
