// SearchableSelect.js
import React from 'react';
import Select from 'react-select';

const SearchableSelect = ({ options, onChange, value }) => {
  console.log(options)
  return (
    <Select
      options={options}
      onChange={onChange}
      value={value}
      isSearchable
      placeholder="Select an option..."
    />
  );
};

export default SearchableSelect;