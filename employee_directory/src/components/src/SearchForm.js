import React from 'react';


function SearchForm(props){
    return (
<form className="search">
<div className="form-group">
  <label htmlFor="gender">Filter By Gender:</label>
  <input
    value={props.search}
    onChange={props.handleInputChange}
    name="gender"
    list="gender"
    type="text"
    className="form-control"
    placeholder="Type in a gender to begin"
    id="gender"
  />
  <datalist id="gender">
      <option value="male"  key="1" />
      <option value="female"  key="1" />
  </datalist>
  <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
    Search
  </button>
</div>
</form>
);
};

export default SearchForm;



