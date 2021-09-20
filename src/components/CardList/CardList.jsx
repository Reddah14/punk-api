import React from "react";
import "./CardList.scss";

import Card from "../Card/Card";

const CardList = (props) => {
  const { beerData } = props;
  console.log(beerData);

  const beers = beerData.map((beer) => {
    return <Card key={beer.id + 1} beerId={beer.id} beerName={beer.name} beerImg={beer.image_url} firstBrewed={beer.first_brewed} beerPh={beer.ph} beerAvb={beer.abv} beerDescription={beer.description} /> 
  });

  return (
    <div className="main-layout flex flex-wrap mt-2 mr-2 mb-2" >
      {beers}
    </div>
  );
};

export default CardList;
