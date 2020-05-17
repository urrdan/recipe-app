import React, { useContext } from "react";
import MealsList from "./MealsList";
import { Mycotx } from "../context";
const AllMeals = () => {
  const contextData = useContext(Mycotx);
  return (
    <div className="Allmeals">
      <h3>All Meals</h3>
      <MealsList
        mealslist={contextData.state.allMeals}
        Meal={contextData.actionHandler.meal}
      />
    </div>
  );
};

export default AllMeals;
