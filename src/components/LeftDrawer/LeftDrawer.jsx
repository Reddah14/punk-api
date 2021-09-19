import React, { useState } from "react";

import { Sidebar } from "primereact/sidebar";
import { Checkbox } from "primereact/checkbox";

import logo from "../../assets/images/logo-small.jpg";
import Searchbar from "../Searchbar/Searchbar";

import "./LeftDrawer.scss";

const LeftDrawer = () => {
  const [inputValue, setInputValue] = useState("");
  const [checkedHighABV, setCheckedHighABV] = useState(false);
  const [checkedClassicRange, setCheckedClassicRange] = useState(false);
  const [checkedAcidic, setCheckedAcidic] = useState(false);
  
  const handleInput = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  }
  const handleCbHighABV = () => {
    setCheckedHighABV(!checkedHighABV);
    console.log("cb high abv ticked");
  };

  const handleCbClassicRange = () => {
    setCheckedClassicRange(!checkedClassicRange);
    console.log("cb classic range ticked");
  };

  const handleCbAcidicRange = () => {
    setCheckedAcidic(!checkedAcidic);
    console.log("cb acidic range ticked");
  };

  return (
    <div>
      <Sidebar visible={true} showCloseIcon={false}>
        <div className="sidebar__label shadow-4 p-3">
          <img src={logo} alt="logo" className="sidebar__label--logo mr-3" />
          <span className="sidebar__label--title">Brewdog Punk-API</span>
        </div>

        <Searchbar label="Search Your Beer" beerToSearch={inputValue} handleInput={handleInput} />

        <div className="text-left mt-5 ml-4">
          <div className="p-field-checkbox">
            <Checkbox
              tooltip="ABV greater than 6.0%"
              tooltipOptions={{ position: "top" }}
              inputId="highABV"
              value="High ABV"
              onChange={handleCbHighABV}
              checked={checkedHighABV}
            />
            <label className="ml-5" htmlFor="highABV">
              High ABV
            </label>
          </div>
        </div>

        <div className="text-left mt-3 ml-4">
          <div className="p-field-checkbox">
            <Checkbox
              tooltip="Brewed before 2010"
              tooltipOptions={{ position: "top" }}
              inputId="classicRange"
              value="Classic Range"
              onChange={handleCbClassicRange}
              checked={checkedClassicRange}
            />
            <label className="ml-5" htmlFor="classicRange">
              Classic Range
            </label>
          </div>
        </div>

        <div className="text-left mt-3 ml-4">
          <div className="p-field-checkbox">
            <Checkbox
              tooltip="pH lower than 4"
              tooltipOptions={{ position: "top" }}
              inputId="acidicRange"
              value="Acidic Range"
              onChange={handleCbAcidicRange}
              checked={checkedAcidic}
            />
            <label className="ml-5" htmlFor="acidicRange">
              Acidic Range
            </label>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default LeftDrawer;
