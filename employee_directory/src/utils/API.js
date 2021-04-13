/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=20&nat=us";

// Export an object with a "search" method that searches the specified API for the passed query
export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
