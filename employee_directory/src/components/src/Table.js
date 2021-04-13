import React from "react";

function Table(props) {
  return (
    <table>

      <thead>
        <tr>
            <td> Name</td>
            <td> Picture</td>
            <td> Email</td>
            <td> Time Offset</td>
            <td> Gender</td>
        </tr>
      </thead>

        {props.results.map((result) => (
          <tr key={result}>
            <td>{result.name.first + " " + result.name.last}</td>
            <td> <img src={result.picture.thumbnail} alt="Employee"/></td>
            <td>{result.email}</td>
            <td>{result.location.timezone.offset}</td>
            <td>{result.gender}</td>
          </tr>
        ))}
        
    </table>
  );
}

export default Table;
