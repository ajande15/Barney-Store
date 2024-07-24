import React from "react";
import "../styles/Local.css";
import "./Headerimg.css";

function Headerimg() {
    return (
        <div className="header__img">
            <div className="labels__header">
                <p className="important">MID-YEAR SALE 20% OFF EVERYTHING</p>
                <p className="fancy__style__txt">Luxury Orthopaedic Dog Beds</p>
                <p className="normal__style__txt">Created by dog lovers who searched the world for a bed that combines luxury, comfort and practicality in one. We didn’t find it so we designed it ourselves.</p>
                <img className="stars__img" src="https://barneybed.com.au/cdn/shop/files/Group_8eb57d97-2c66-48e9-b721-820de8e6d3f5.png?v=1720316355"/>
                <p className="bold__style__txt">Australia's Highest Rated Dog Beds</p>
                <p className="normal__style__txt">Over 120,000 Contented Canines</p>
                <button className="browse_all_beds">Browse All Beds</button>
            </div>
        </div>
    )
}

export default Headerimg;