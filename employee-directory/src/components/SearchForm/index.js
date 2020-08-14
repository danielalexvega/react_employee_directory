import React from "react";
import "./style.css";
import SearchContext from "../../utils/SearchContext";

function SearchForm() {
  const { search, employees, handleInputChange } = useContext(SearchContext);

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employeeName">Employee Name:</label>
        <input
          value={search}
          onChange={handleInputChange}
          name="employeeName"
          list="employeeList"
          type="text"
          className="form-control"
          placeholder="Type the employees name"
          id="employeeName"
        />
        <datalist id="employees">
          {employees.map(employee => (
            <option value={`${employee.name.first} ${employee.name.last}`}
              key={`${employee.name.first} ${employee.name.last}`} />
          ))}
        </datalist>

      </div>
    </form>
  );
}

export default SearchForm;
