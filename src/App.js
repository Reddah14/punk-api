import React, { useState } from "react";
import "./App.css";

import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";

import logo from "./assets/images/logo-small.jpg";

import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

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

      </Sidebar>

      {inputValue}
      
    </div>
  );
};

export default App;
