import React from "react";
import "./App.css";

//import { InputText } from 'primereact/inputtext';
import { Sidebar } from "primereact/sidebar";

import logo from "./assets/images/logo-small.jpg";

import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const App = () => {
  return (
    <div className="App">
      <Sidebar visible={true} showCloseIcon={false}>
        <div className="sidebar__label shadow-4 p-3">
          <img src={logo} alt="logo" className="sidebar__label--logo mr-3" />
          <span className="sidebar__label--title">Brewdog Punk-API</span>
        </div>
      </Sidebar>
    </div>
  );
};

export default App;
