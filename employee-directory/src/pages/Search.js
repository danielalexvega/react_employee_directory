import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchFrom from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import EmployeeContext from "../utils/EmployeeContext";

function Search() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [results, setResults] = useState([]);
  const [error, setError]  = useState("");

  //need a debouncer... a club bouncer!

  useEffect(() => {
    API.getEmployeeList.then(res => {
      setEmployees(res)
      .catch(err => {
        console.log(err);
      })
    }), [search]
  });

  handleInputChange = event => {
    setSearch({search: event.target.value });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.getEmployee(search)
    .then(res => {
      if(res.data.status === "error") {
        throw new Error(res.data.message);
      }
      setResults(res.data.message);
      setError("");
    })
    .catch(err => setError(err.message));
  };

  return (
    <div>
      <Container>
        <EmployeeContext.Provider value={{ search, employees, results, error, handleFormSubmit, handleInputChange }}>
          <Alert
            type="danger"
            style={{ opacity: error ? 1 : 0, marginBottom: 10}}
          >
            {error}
          </Alert>
          <SearchForm />
          <SearchResults />

        </EmployeeContext.Provider>
      </Container>
    </div>
  );


}

export default Search;