import React from "react";
import "./main.css";
import CategoryMeals from "../components/CategoryMeals";
import MealRecipe from "../components/MealRecipe";
import Home from "../components/Home";
import About from "../components/About";
import AllMeals from "../components/AllMeals";
import { Route } from "react-router-dom";
import Navbar from "../components/navbar";

const App = () => {
  return (
    <div className="App h-100">
      <Navbar />
      <div className="components-container">
        <Route path="/category" component={CategoryMeals} />
        <Route path="/meal" component={MealRecipe} />
        <Route path="/about" component={About} />
        <Route path="/allmeals" component={AllMeals} />
        <Route exact path="/" component={Home} />
      </div>
      <footer>
        <h3>Mohamed Abdulle</h3>
        <p> copyright &copy; 2019</p>
      </footer>
    </div>
  );
};

export default App;
