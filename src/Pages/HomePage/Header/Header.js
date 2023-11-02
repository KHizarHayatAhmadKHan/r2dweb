import React from "react";
import { useState, useMemo} from 'react'
// import { NavLink } from "react-router-dom";
import Select from "react-select";
import countryList from 'react-select-country-list'
import "./Header.css";
import logo from "../../images/logo.png";

export default function Header() {
  // Select Country
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <>
      <header>
        <div className="top"></div>
        <div className="midNav">
          <img src={logo} alt="" />
          <div className="midOptions">
            <Select className="country" options={options} value={value} onChange={changeHandler}></Select>
          </div>
        </div>
        
      <div className="navbar">
            {/* <NavLink>Home</NavLink> */}
            <a href="www.google.com" target="_blank">Home</a>
            <a href="$">Our Cars</a>
            <a href="$">Limousine Services</a>
            <a href="$">Get APP</a>
            <a href="$">Our News</a>
            <a href="$">Contact</a>
        </div>
      </header>
    </>
  );
}
