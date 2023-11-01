import car from "../../images/page-img.png";
import selectedCAr from "../../images/selectedCar.png"
import React from "react";
import "./details_header.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Head_details() {
  let carName = "AG MC FORD RAPTOR";
  return (
    <>
      <section className="header">
        <img src={car} alt="car_details" />
      </section>
      <div className="page">
        <h1>{carName}</h1>
        <div className="lines"></div>
        <p className="path">Path of car</p>
      </div>
      <section className="details_section">
        <div className="deatails_heading">
          <p className="heading">AG MC FORD RAPTOR</p>
        </div>
        <div className="selected_carPic">
          <img src={selectedCAr} alt="" />
        </div>
        <div className="selected_carDetails"></div>
        <div className="detail_right"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a ipsum perferendis illum nihil natus ipsa delectus, suscipit totam quisquam laboriosam accusamus doloremque nesciunt debitis, voluptatum qui, non repellat. Maxime nulla debitis adipisci odit.</p></div>
      </section>
    </>
  );
}
