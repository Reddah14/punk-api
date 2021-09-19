import React, { useState } from "react";
import "./App.css";

import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";
import { Checkbox } from "primereact/checkbox";

import logo from "./assets/images/logo-small.jpg";

import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [checkedHighABV, setCheckedHighABV] = useState(false);
  const [checkedClassicRange, setCheckedClassicRange] = useState(false);
  const [checkedAcidic, setCheckedAcidic] = useState(false);

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
    <div className="App">
      <Sidebar visible={true} showCloseIcon={false}>
        <div className="sidebar__label shadow-4 p-3">
          <img src={logo} alt="logo" className="sidebar__label--logo mr-3" />
          <span className="sidebar__label--title">Brewdog Punk-API</span>
        </div>

        <div className="p-fluid mt-6 m-3">
          <span className=" p-input-icon-left p-float-label">
            <i className="pi pi-search" />
            <InputText
              id="searchBeer"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <label htmlFor="searchBeer">Search Your Beer</label>
          </span>
        </div>

        <div className="text-left mt-5 ml-4">
          <div className="p-field-checkbox">
            <Checkbox
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

      {inputValue}
    </div>
  );
};

export default App;
