import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import SearchContext from "../utils/SearchContext";

function Search() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [error, setError] = useState("");

  //need a debouncer... a club bouncer!

  useEffect(() => {
    API.getEmployeeList.then(res => {
      setEmployees(res.results);
      setFilteredEmployees(res.results)
        .catch(err => {
          console.log(err);
        })
    }), [search]
  });

  handleInputChange = event => {
    setSearch(event.target.value);
    //as I listen to their search value.... I filter an array...
    setFilterEmployees(employees.filter(
      employee => (`${employee.name.first} ${employee.name.last}`).includes(search))
    );
  }

  return (
    <div>
      <Container>
        <SearchContext.Provider value={{ search, employees, filteredEmployees, error, handleInputChange }}>
          <Alert
            type="danger"
            style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
          >
            {error}
          </Alert>
          <SearchForm />
          <SearchResults />


        </SearchContext.Provider>
      </Container>
    </div>
  );


}

export default Search;