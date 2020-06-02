import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SearchBox = ({ searchOnChange }) => {
  return (
    <div className="searchbox d-flex justify-content-center align-items-center  mx-auto my-sm-0 my-4 ">
      <input
        className="border-0 px-3"
        type="text"
        placeholder="Search Meal"
        onChange={(e) => searchOnChange(e)}
      />
      <NavLink to="/meal">
        <button
          className="btn btn-sm btn-primary"
          //onClick={val.Meal.bind(this, val.state.search)}
        >
          Go &rarr;
        </button>
      </NavLink>
    </div>
  );
};

SearchBox.propTypes = {
  //searchOnChange=prop
};

export default SearchBox;
