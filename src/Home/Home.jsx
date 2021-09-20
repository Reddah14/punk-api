import React, { useState, useEffect } from "react";

import "./Home.scss";

import { Sidebar } from "primereact/sidebar";

import logo from "../assets/images/logo-small.jpg";
import Searchbar from "../components/Searchbar/Searchbar";
import FilterList from "../components/FilterList/FilterList";
import CardList from "../components/CardList/CardList";

const Home = () => {
  const [beersArr, setBeersArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      'https://api.punkapi.com/v2/beers'
    )
      .then((response) => { 
        return response.json();
      })
      .then((beerData) => {
        setBeersArr(beerData)
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilters = (event) => {
    console.log('checkbox cheked from Home!', event);
  }

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(event.target.value);
  };

  const filteredBeers = beersArr.filter((beer) => {
    const beerNameToLowerC = beer.name.toLowerCase();
    const searchTermToLowerC = searchTerm.toLowerCase();

    return beerNameToLowerC.includes(searchTermToLowerC);
  })

  return (
    <div className="home">

      <Sidebar visible={true} showCloseIcon={false}>
        <div className="sidebar__label shadow-4 p-3">
          <img src={logo} alt="logo" className="sidebar__label--logo mr-3" />
          <span className="sidebar__label--title">Brewdog Punk-API</span>
        </div>
        <Searchbar
          label="Search Your Beer"
          beerToSearch={searchTerm}
          handleInput={handleInput}
        />
        <FilterList handleFilters={handleFilters} />
      </Sidebar>

      <CardList beerData={filteredBeers} />
    </div>
  );
};

export default Home;
