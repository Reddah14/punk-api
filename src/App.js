import React from 'react';
import './App.css';

//import { InputText } from 'primereact/inputtext';
import logo from './assets/images/logo-small.jpg';
import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const App = () => {


  return (
    <div className="App shadow-4 p-3">  

      <div className="topbar">
        <img src={logo} alt="logo" className="topbar-logo" />
          <span className="topbar-title">Brewdog Punk-API</span>
        <img src={logo} alt="logo" className="topbar-logo" />
      </div>

{/*       <div>
        <InputText />
      </div> */}

{/*       <Sidebar visible={activeSidebar}>
        sidebar content
      </Sidebar> */}
    </div>
  );
}

export default App;
