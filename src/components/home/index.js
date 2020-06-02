import React, { useContext } from "react";
//import { Consumer } from "../context";

import { Mycotx } from "../../context";
import "./home.sass";
import SearchBox from "./SearchBox";
import Categories from "./Categories";

const Home = () => {
  const contextData = useContext(Mycotx);
  return (
    <div className="Home">
      <SearchBox searchOnChange={contextData.actionHandler.search} />
      <p className="intro-line">
        "Master the secret to making dishes all around the globe in few simple
        steps"
      </p>
      <h3 className="heading">Categories</h3>
      <Categories
        categoriesList={contextData.state.categories}
        categoryOnClick={contextData.actionHandler.category}
      />
    </div>
  );
};

export default Home;
