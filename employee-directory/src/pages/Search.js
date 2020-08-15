import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

function Search() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    if (employees.length === 0) {
      API.getEmployeeList()
        .then(res => {
          setEmployees(res.data.results);;
          setFilteredEmployees(res.data.results)
        })
        .catch(err => {
          console.log(err);
        });
    }
  });

  const handleInputChange = event => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(search.length);

    setFilteredEmployees(employees.filter(
      employee => (`${employee.name.first} ${employee.name.last}`).includes(search))
    );
  }


  const handleFormSubmit = event => {
    event.preventDefault();
    setFilteredEmployees(employees.filter(
      employee => (`${employee.name.first} ${employee.name.last}`).includes(search))
    );
  }

  return (
    <div>
      <Container>
        <SearchForm
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          employees={employees}
          search={search}
        />
        <SearchResults
          filteredEmployees={filteredEmployees}
        />
      </Container>
    </div>
  );


}

export default Search;