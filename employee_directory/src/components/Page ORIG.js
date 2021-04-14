import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/src/Table";
import SearchForm from "../components/src/SearchForm";
// import uuid from 'uuid';

class Page extends Component {
  
  state = {
    search: "",
    results: [],
    error: "",
    // filterStr: " ",
  };

    // When the component mounts, get the employee data and update this.state.results
    componentDidMount() {
      API.search()
        .then(res => this.setState( {results: res.data.results} ))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {  
      this.setState({ search: event.target.value });
    };

    // const filteredElements = elements.filter(e => e.includes(filterStr))

  render() {
  return (
        <div> 
          <h1>My Employee Search</h1>
          <br/>
          <SearchForm {...this.state}/>
          <Table {...this.state}/>

        </div>
    );
  }
  }

export default Page;

// class FilterList extends React.Component {
//   render () {
//     const { elements } = this.props;
//     const { filterStr } = this.state;

//     return (
//       <div>
//         <input
//           type="text"
//           value={ filterStr }
//           onChange={ e => this.setState({ filterStr: e.target.value }) } />
//         <ul>
//           { filteredElements }
//         </ul>
//       </div>
//     );
//   }
// }