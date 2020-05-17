import React, { useContext } from "react";
//import { Consumer } from "../context";
import { Mycotx } from "../context";
import MealsList from "./MealsList";

const CategoryMeals = () => {
  const contextData = useContext(Mycotx);
  return (
    <div>
      {/* <div className="category-description text-dark text-center my-5">
              <h3>{val.state.catDescription.strCategory}</h3>
              <p className="">
                {val.state.catDescription.strCategoryDescription}
              </p>
            </div> */}
      <MealsList
        mealslist={contextData.state.category}
        Meal={contextData.actionHandler.meal}
      />
    </div>
  );
};

export default CategoryMeals;
