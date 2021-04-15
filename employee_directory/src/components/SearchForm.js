import React from 'react';


function SearchForm({search, handleFilter}){
    return (
<div className="form-group">
  <label htmlFor="gender">Filter:</label>
  <input
    value={search}
    onChange={e=>handleFilter(e.target.value)}
    name="gender"
    list="gender"
    type="text"
    className="form-control"
    placeholder="Type In Name"
    id="gender"
  />
</div>


);
};

export default SearchForm;



