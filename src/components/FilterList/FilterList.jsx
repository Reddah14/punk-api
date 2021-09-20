import React, { useState } from "react";

import "./FilterList.scss";

import FilterItem from "../FilterItem/FilterItem";

const FilterList = (props) => {

  const { handleFilters } = props;

  const [checkedHighABV, setCheckedHighABV] = useState(false);
  const [checkedClassicRange, setCheckedClassicRange] = useState(false);
  const [checkedAcidic, setCheckedAcidic] = useState(false);

  const handleCbHighABV = (event) => {
    console.log(event);
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
      <FilterItem
        tooltip="ABV greater than 6.0%"
        inputId={"highABV"}
        value={"High ABV"}
        onChange={handleFilters}
        checked={checkedHighABV}
        label={"High ABV"}
      />
      <FilterItem
        tooltip="Brewed before 2010"
        inputId="classicRange"
        value="Classic Range"
        onChange={handleFilters}
        checked={checkedClassicRange}
        label={"Classic Range"}
      />
      <FilterItem
        tooltip="pH lower than 4"
        inputId="acidicRange"
        value="Acidic Range"
        onChange={handleFilters}
        checked={checkedAcidic}
        label={"Acidic Range"}
      />
    </div>
  );
};

export default FilterList;
