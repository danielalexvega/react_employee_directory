//get info from the database... mongoDB... 

//need to get all employees... add employees... delete employees... update employees

// randomuser.me
// https://randomuser.me/api/?results=50

import axios from "axios";

export default {
  getEmployeeList: function(query) {
    return axios.get(
      "https://randomuser.me/api/?results=50"
    );
  }
};
