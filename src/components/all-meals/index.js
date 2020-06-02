import React, { useContext } from "react";
import MealsList from "../components-utilities/meals-list";
import { Mycotx } from "../../context";
const AllMeals = () => {
  const contextData = useContext(Mycotx);
  return (
    <div className="Allmeals">
      <h3 className="heading">All Meals</h3>
      <MealsList
        mealslist={contextData.state.allMeals}
        Meal={contextData.actionHandler.meal}
      />
    </div>
  );
};

export default AllMeals;
