import React, { Component } from "react";
import API from "../utils/API";
import Table from "./Table";
import SearchForm from "../components/SearchForm";

class Page extends Component {
  state = {
    search: "",
    results: [],
    error: "",
    originalList: [],
    sortedAsc:false,
  };

  // When the component mounts, get the employee data and update this.state.results
  componentDidMount() {
    API.search()
      .then((res) =>
        this.setState({
          results: res.data.results,
          originalList: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFilter = (name) => {
    this.setState({ search: name });
    const newArr = this.state.originalList.filter(
      (person) =>
        person.name.first.toLowerCase().includes(name.toLowerCase()) ||
        person.name.last.toLowerCase().includes(name.toLowerCase())
    );
    this.setState({ results: newArr });
  };

  handleNameSort = () => {
    //set for false condition on page load
    let asc = 1;
    let desc = -1;

    //set for false condition on page load
    if (this.state.sortedAsc){
      asc = -1;
      desc = 1;
    }

    const newArr = this.state.originalList.sort((a, b) => {
      if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
        return asc;
      }
      if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
        return desc;
      }
      return 0;
    });
    this.setState({
      originalList: newArr,
      sortedAsc: !this.state.sortedAsc,
    });
  };

  render() {
    return (
      <div>
        <h1>My Employee Search</h1>
        <br />
        <button height="400px" width="500px" onClick={this.handleNameSort}>
          sort by name
        </button>
        <br />
        <SearchForm
          search={this.state.search}
          handleFilter={this.handleFilter}
        />
        <Table {...this.state} />
      </div>
    );
  }
}

export default Page;
