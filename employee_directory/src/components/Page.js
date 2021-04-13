import React, { Component } from "react";
import API from "../utils/API"
import Table from "../components/src/Table"

class Page extends Component {
  
  state = {
    search: "",
    results: [],
    error: ""
  };

    // When the component mounts, get the employee data and update this.state.results
    componentDidMount() {
      API.search()
        .then(res => this.setState( {results: res.data.results} ))
        .then(console.log(this.state.results))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {  //KEEP?
      this.setState({ search: event.target.value });
    };


  render() {
  return (
        <div> 
          <h1>My Employee Search</h1>
          <br/>
          <Table results={this.state.results} />
          
          

        </div>
    );
  }
  
    
  }


export default Page;