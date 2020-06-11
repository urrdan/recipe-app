import React, { useEffect, useReducer } from "react";

const Mycotx = React.createContext();

const initialState = {
  categories: [],
  currentCategory: [],
  currentCategoryMeals: [],
  category: [],
  allMeals: [],
  meal: {},
  searchedResult: [],
};

const reducerFunction = (state, action) => {
  switch (action && action.type) {
    case action.type:
      return { ...state, [action.type]: action.value };
    default:
      return { ...state };
  }
};

const mapDispatch = (dispatch, apiCaller) => ({
  category: (currentCategory) => {
    const categoryUrl = `filter.php?c=${currentCategory}`;
    apiCaller(categoryUrl).then((data) => {
      dispatch({ type: "currentCategoryMeals", value: data.meals });
      dispatch({ type: "currentCategory", value: currentCategory });
    });
  },
  meal: (meal) => {
    const mealUrl = `search.php?s=${meal}`;
    apiCaller(mealUrl).then((data) => {
      dispatch({ type: "meal", value: data.meals[0] });
    });
  },
  search: (event, mealsList) => {
    const inputValue = event//.target.value;
    const result = mealsList.filter((item) => {
      if (
        item.strMeal.toLowerCase().includes(inputValue.toLowerCase()) &&
        inputValue !== ""
      ) {
        return item;
      }
    });
    dispatch({ type: "searchedResult", value: result });
  },
});

const AppProvider = (props) => {
  const [data, dispatch] = useReducer(reducerFunction, initialState);

  const apiCaller = (url) => {
    const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
    const fullUrl = baseUrl + url;
    return fetch(fullUrl).then((data) => data.json());
  };

  const actionHandler = mapDispatch(dispatch, apiCaller);

  useEffect(() => {
    const allMealList = [];
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((result) => result.json())
      .then((result) => {
        dispatch({ type: "categories", value: result.categories });
        return result.categories.map((x) => x.strCategory);
      })
      .then((result) => {
        result.forEach((z) =>
          fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${z}`)
            .then((result) => result.json())
            .then((result) => result.meals.forEach((x) => allMealList.push(x)))
        );
        return allMealList;
      })
      .then((result) => dispatch({ type: "allMeals", value: result }));
  }, []);

  return (
    <Mycotx.Provider value={{ state: data, actionHandler }}>
      {props.children}
    </Mycotx.Provider>
  );
};

export { AppProvider, Mycotx };
