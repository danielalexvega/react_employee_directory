import axios from "axios";

const url ="https://randomuser.me/api/?results=50";

const API =  {
  getEmployeeList: function() {
    return axios.get(url);
  }
};

export default API;
