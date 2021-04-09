import React from "react";

const name = "Christian";
const thoughts = "is amazing!!!";
const numEEs = 5;

// let eeData= $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });



// const stripVowels = str => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i].toLowerCase())) {
//       result += str[i];
//     }
//   }
//   return result;
// };

// IDEA for table generation at => https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm
// IDEA for table generation at => https://stackoverflow.com/questions/18395976/how-to-display-a-json-array-in-table-format/18396096
function Table() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is ({name})</h1>
          <h2>My name has ({name.length}) letters</h2>
          <h2>I think React ({thoughts})</h2>
        </div>
      </div>
    </div>
  );
}

export default Table;
