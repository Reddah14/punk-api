import React from "react";
import "./App.scss";

import LeftDrawer from "./components/LeftDrawer/LeftDrawer";


import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const App = () => {

  return (
    <div className="App">
      <LeftDrawer />
    </div>
  );
};

export default App;
