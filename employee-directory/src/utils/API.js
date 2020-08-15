import axios from "axios";

const url ="https://randomuser.me/api/?results=50";

export default {
  getEmployeeList: function() {
    return axios.get(url);
  }
};
