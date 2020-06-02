import React from "react";
import "./app.sass";
import CategoryMeals from "../components/category-meals";
import MealRecipe from "../components/meal-recipe";
import Home from "../components/home";
import About from "../components/about";
import AllMeals from "../components/all-meals";
import { Route } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
      <Footer />
    </div>
  );
};

export default App;
