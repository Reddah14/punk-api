import React/* , { useState }  */from "react";

import "./FilterList.scss";

import FilterItem from "../FilterItem/FilterItem";

const FilterList = (props) => {

  const { 
    isHighABVchecked,
    isClassicRangeChecked,
    isAcidicChecked,
    handleFilters
  } = props;

  return (
    <div>
      <FilterItem
        tooltip="ABV greater than 6.0%"
        inputId={"highABV"}
        value={"High ABV"}
        onChange={handleFilters}
        checked={isHighABVchecked}
        label={"High ABV"}
      />
      <FilterItem
        tooltip="Brewed before 2010"
        inputId="classicRange"
        value="Classic Range"
        onChange={handleFilters}
        checked={isClassicRangeChecked}
        label={"Classic Range"}
      />
      <FilterItem
        tooltip="pH lower than 4"
        inputId="acidicRange"
        value="Acidic Range"
        onChange={handleFilters}
        checked={isAcidicChecked}
        label={"Acidic Range"}
      />
    </div>
  );
};

export default FilterList;
