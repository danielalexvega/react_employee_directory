import React from "react";
import "./style.css";


function SearchForm(props) {

  return (
    <div className="sticky-div">
      <form className="search" onSubmit={props.handleFormSubmit}>
        <div className="form-group">
          {/* <label className="label" htmlFor="employeeName">Employee Name:</label> */}
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="employeeName"
            list="employeeList"
            type="text"
            className="form-control"
            placeholder="Type the employees name"
            id="employeeName"
          />
          <datalist id="employeeList">
            {props.employees.map(employee => (
              <option value={`${employee.name.first} ${employee.name.last}`}
                key={`${employee.name.first} ${employee.name.last}`} />
            ))}
          </datalist>
        </div>
      </form>
          <button className="btn btn-success" onClick={props.handleReset}>Reset</button>
    </div >
  );
}

export default SearchForm;
