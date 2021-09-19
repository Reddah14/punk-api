import React, { useState } from "react";
import "./FilterList.scss";

import { Checkbox } from "primereact/checkbox";

const FilterList = () => {

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
    <div>
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
    </div>
  );
};

export default FilterList;
