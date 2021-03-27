import React from "react";
// import SearchContext from "../../utils/SearchContext";
import "./style.css";


function SearchResults(props) {
  // const { filteredEmployees } = useContext(SearchContext);
  return (
    <div style={{display:"inline-flex", flexWrap:"wrap"}}>

      {props.filteredEmployees.map((employee, index)  => (
        <div className="card d-flex flex-wrap" style={{width: 250, margin: 10}} key={index}>
          <img src={employee.picture.large}
            alt={`${employee.name.first} ${employee.name.last}`}
            className="card-img-top" />
          <div className="card-body">
            <div className="card-title">
              <h5>{`${employee.name.first} ${employee.name.last}`}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Email: {employee.email}
                </li>
                <li className="list-group-item">
                  Phone Number: {employee.phone}
                </li>
                <li className="list-group-item">
                  Location: {employee.location.city}, {employee.location.country}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}



    </div>
  );
};

export default SearchResults;
