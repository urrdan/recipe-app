import React, { useEffect, useReducer } from "react";

const Mycotx = React.createContext();

const initialState = {
  categories: [],
  catDescription: [],
  category: [],
  allMeals: [],
  meal: {},
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
  category: (category) => {
    const categoryUrl = `filter.php?c=${category}`;
    apiCaller(categoryUrl).then((data) => {
      dispatch({ type: "category", value: data.meals });
    });
  },
  meal: (meal) => {
    const mealUrl = `search.php?s=${meal}`;
    apiCaller(mealUrl).then((data) => {
      dispatch({ type: "meal", value: data.meals[0] });
    });
  },
  search: (event) => {
    const searchUrl = `search.php?s=${event.target.value}`;
    apiCaller(searchUrl).then((data) => {
      const searchedMeal = data.meals && data.meals[0] ? data.meals[0] : {};
      dispatch({ type: "meal", value: searchedMeal });
    });
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
      .then((a) => a.json())
      .then((a) => {
        dispatch({ type: "categories", value: a.categories });
        return a.categories.map((x) => x.strCategory);
      })
      .then((a) => {
        a.forEach((z) =>
          fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${z}`)
            .then((a) => a.json())
            .then((a) => a.meals.forEach((x) => allMealList.push(x)))
        );
        return allMealList;
      })
      .then((a) => dispatch({ type: "allMeals", value: a }));
  }, []);

  return (
    <Mycotx.Provider value={{ state: data, actionHandler }}>
      {props.children}
    </Mycotx.Provider>
  );
};

export { AppProvider, Mycotx };
