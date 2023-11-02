import car from "../../images/page-img.png";
import selectedCAr from "../../images/selectedCar.png"
import interior1 from "../../images/interior 1.png"
import interior2 from "../../images/interior 2.png"
import interior3 from "../../images/interior 3.png"
import interior4 from "../../images/interior 4.png"
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
        <div className="selected_carInterior">
          <img src={interior1} alt="interior 1" />
          <img src={interior2} alt="interior 2" />
          <img src={interior3} alt="interior 3" />
          <img src={interior4} alt="interior 4" />
        </div>
        {/* <div className="selected_carDetails">
          <div className="description_headings">
            <a href="#">VEHICAL DESCRIPTION</a>
            <a href="#">SPECIFICATIONS</a>
            <a href="#">EQUIPMENT</a>
            <a href="#">REQUIRED DOCUMENTS</a>
          </div>
          <div className="description_details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae porro asperiores amet ratione earum labore animi! Eum illo minima quod illum, dolor velit consectetur ipsum, quibusdam saepe nemo fugit. Ab earum beatae neque.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus asperiores laudantium, temporibus, consectetur consequuntur eius maxime architecto facilis laboriosam ratione labore illum? Dolorum consectetur illo in expedita deleniti quibusdam nesciunt, consequuntur quos eligendi vero illum aliquam reprehenderit temporibus laborum assumenda dolorem quo corporis reiciendis necessitatibus debitis voluptatibus! Quibusdam, doloremque ipsa.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus asperiores laudantium, temporibus, consectetur consequuntur eius maxime architecto facilis laboriosam ratione labore illum? Dolorum consectetur illo in expedita deleniti quibusdam nesciunt, consequuntur quos eligendi vero illum aliquam reprehenderit temporibus laborum assumenda dolorem quo corporis reiciendis necessitatibus debitis voluptatibus! Quibusdam, doloremque ipsa.</p>
          </div>
        </div> */}
        <div className="detail_right">
          <div className="price_tag">
            
          </div>
          </div>
      </section>
    </>
  );
}
