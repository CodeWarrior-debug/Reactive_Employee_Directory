import React from "react";
//import "./style.css";

function SearchEmployees(props) {
  return (
    <tr className="list-group search-results">
      {props.results.map(result => (
        <td>{props.gender} </td>
      ))}
    </tr>
  );
}

export default SearchEmployees;


// {/* <tr>
// <td>James</td>
// <td>Jordan</td>
// <td>myemail@gmail.com</td>
// <td>EST</td>
// </tr> */}
