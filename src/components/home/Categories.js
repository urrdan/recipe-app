import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({ categoriesList, categoryOnClick }) => {
  return (
    <div className="categories">
      {categoriesList.map((category) => (
        <NavLink to="/category" key={category.idCategory}>
          <div
            className="category d-flex  justify-content-between align-items-center bg-light "
            onClick={() => categoryOnClick(category.strCategory)}
          >
            <img className="" src={category.strCategoryThumb} alt="wrong"></img>
            <p className=" category-name">{category.strCategory}</p>
            <span className=""></span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

Categories.propTypes = {};

export default Categories;
