/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";
const BASEURL = "https://randomuser.me/api/?";
const RESULTS = "results=30";


// Export an object with a "search" method that searches the specified API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + RESULTS + query);
  }
};
