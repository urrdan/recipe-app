import React, { useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Mycotx } from "../../context";
import "./search-box.sass";

const SearchBox = ({ searchOnChange }) => {
  const contextData = useContext(Mycotx);
  const searchInput = useRef(null);
  useEffect(() => {
    if (
      searchInput.current.value.length < 1 &&
      contextData.state.searchedResult.length > 0
    ) {
      contextData.actionHandler.search("", contextData.state.allMeals);
    }
  });
  return (
    <div className="searchbox d-flex justify-content-center align-items-center  mx-auto my-sm-0 my-4 ">
      <div className="search-menu">
        <input
          ref={searchInput}
          type="text"
          placeholder="Search Meal"
          onChange={(e) =>
            contextData.actionHandler.search(
              e.target.value,
              contextData.state.allMeals
            )
          }
        />
        <ul className="search-result">
          {contextData.state.searchedResult.map((item) => (
            <li
              key={item.idMeal}
              onClick={() => contextData.actionHandler.meal(item.strMeal)}
            >
              <NavLink to="/meal">{item.strMeal}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  //searchOnChange=prop
};

export default SearchBox;
