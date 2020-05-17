import React, { useContext } from "react";
//import { Consumer } from "../context";
import { NavLink } from "react-router-dom";
import { Mycotx } from "../context";

const Home = () => {
  const contextData = useContext(Mycotx);
  return (
    <div className="Home">
      <div className="searchbox d-flex justify-content-center align-items-center  mx-auto my-sm-0 my-4 ">
        <input
          className="border-0 px-3"
          type="text"
          placeholder="Search Meal"
          onChange={(e) => contextData.actionHandler.search(e)}
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
      <p className="intro-line">
        "Master the secret to making dishes all around the globe in few simple
        steps"
      </p>
      <h3 className="mb-5">Categories</h3>
      <div className="categories">
        {contextData.state.categories.map((category) => (
          <NavLink to="/category" key={category.idCategory}>
            <div
              className="category d-flex  justify-content-between align-items-center bg-light "
              onClick={() =>
                contextData.actionHandler.category(category.strCategory)
              }
            >
              <img
                className=""
                src={category.strCategoryThumb}
                alt="wrong"
              ></img>
              <p className=" category-name">{category.strCategory}</p>
              <span className=""></span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
