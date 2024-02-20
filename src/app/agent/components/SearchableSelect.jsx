// SearchableSelect.js

"use client"
import React from 'react';
import Select from 'react-select';
import FetchAll from '../../../../hooks/FetchAll';

const SearchableSelect = ({tag,onChange, value, }) => {
  let data
  switch(tag) {
    case "clients":
      const {cd} = FetchAll(tag)
      data = cd
      break;
    case "vehicles":
      const {vd} = FetchAll(tag)
      data = vd
  break
    case "policies":
     
    const {pd} = FetchAll(tag)
    data = pd
    break
    case "quotes":
      const {qd} = FetchAll(tag)
      data = qd
  break
    default:
   data = []
  }

  const options = [
    { name: 'apple', label: 'Apple' },
    { name: 'banana', label: 'Banana' },
    { name: 'orange', label: 'Orange' },
    { name: 'grape', label: 'Grape' },
    // Add more options as needed
  ];


  return (
    <Select
      options={data}
      onChange={onChange}
      value={value?._id}
      isSearchable
      placeholder={`Search ${tag}`}
    />
  );
};

export default SearchableSelect;