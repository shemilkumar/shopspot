import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector({ handleCountry }) {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
    handleCountry(value);
  };

  return (
    <Select
      options={options}
      value={value}
      onChange={changeHandler}
      className="dark:bg-gray-700 dark:text-teal-50"
    />
  );
}

export default CountrySelector;
