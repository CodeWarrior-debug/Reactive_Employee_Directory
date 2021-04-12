// import React from "react";

// const name = "Christian";
// const thoughts = "is amazing!!!";
// // const numEEs = 5;
// // console.log(eeData);

// // IDEA for table generation at => https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm
// // IDEA for table generation at => https://stackoverflow.com/questions/18395976/how-to-display-a-json-array-in-table-format/18396096
// function Table() {
//   return (
//     <div className="main-container">
//       <div className="container">
//         <div className="jumbotron">
//           <h1>Hi! My name is ({name})</h1>
//           <h2>My name has ({name.length}) letters</h2>
//           <h2>I think React ({thoughts})</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Table;

import React from "react";
import SearchEmployees from "./SearchEmployees";

function Table(props) {
    return(
        <table>
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td>TimeZone</td>
                </tr>
            </thead>
            <tbody>
                <SearchEmployees></SearchEmployees>
            </tbody>
        </table>
    );
}




    export default Table;

//     import React from "react";
// import "./style.css";

// function SearchResults(props) {
//   return (
//     <ul className="list-group search-results">
//       {props.results.map(result => (
//         <li key={result} className="list-group-item">
//           <img alt="Dog" src={result} className="img-fluid" />
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default SearchResults;