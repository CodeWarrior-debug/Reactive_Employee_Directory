import React from 'react';


function SearchForm(props){
    return (
<form className="search m-6">
<div className="form-group">
  <label htmlFor="gender">Filter:</label>
  <input
    value={props.search}
    onChange={props.handleInputChange}
    name="gender"
    list="gender"
    type="text"
    className="form-control"
    placeholder="Pick to begin"
    id="gender"
  />
  <datalist id="gender">
      <option value="male"  key="1" />
      <option value="female"  key="2" />
  </datalist>
  <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
    Search
  </button>
</div>
</form>


);
};

export default SearchForm;



