import React, { useContext } from "react";
//import { Consumer } from "../context";
import { Mycotx } from "../../context";
import MealsList from "../components-utilities/meals-list";

const CategoryMeals = () => {
  const contextData = useContext(Mycotx);
  return (
    <div>
      <h3 className="heading">{contextData.state.currentCategory}</h3>
      <MealsList
        mealslist={contextData.state.currentCategoryMeals}
        Meal={contextData.actionHandler.meal}
      />
    </div>
  );
};

export default CategoryMeals;
