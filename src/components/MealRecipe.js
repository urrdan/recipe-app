import React, { useContext } from "react";
import { Mycotx } from "../context";

const Meal = () => {
  const contextData = useContext(Mycotx);
  const meal = contextData.state.meal;

  let subInstructions1 = "";
  let subInstructions2 = "";
  let recipeVideoUrl = "";

  if (meal.strInstructions) {
    subInstructions1 = meal.strInstructions.slice(0, 300);
    subInstructions2 = meal.strInstructions.slice(300);
  }
  if (meal.strYoutube) {
    recipeVideoUrl = meal.strYoutube.replace("watch?v=", "embed/");
  } else {
    recipeVideoUrl = "";
  }
  const ingredients = [];
  let numb = 0;
  while (numb >= 0) {
    numb++;
    if (meal["strIngredient" + numb]) {
      if (ingredients.includes(meal["strIngredient" + numb])) {
      } else {
        ingredients.push(meal["strIngredient" + numb]);
      }
    } else {
      numb = -1;
    }
  }
  return (
    <div className="Meal-recipe-cont bg-dark">
      <div className="Meal-recipe p-2 text-light">
        <section>
          <h5 className="">{meal.strMeal}</h5>
          <h6 className="lighted text-center">
            {meal.strCategory}/{meal.strArea}
          </h6>
        </section>

        <img className="" src={meal.strMealThumb} alt="."></img>

        <section>
          <h5 className=" ">Ingredients</h5>
          <ul className="px-3 lighted">
            {ingredients.map((item) => (
              <li className="mx-1" key={item}>
                <span className="bullet">-</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h5 className="">Recipe</h5>

          <div className="lighted instructions d-sm-none">
            <span>{/* a.str */ subInstructions1}</span>
            <span className="hidden hidden-p collapse ">
              {subInstructions2}
              <br />
            </span>
            <span
              className="shower"
              data-target=".hidden"
              data-toggle="collapse"
            >
              ...more
            </span>
            <div className="hidden hidden-coverer collapse">Cover</div>
          </div>

          <p className="lighted instructions d-none d-sm-block">
            {meal.strInstructions}
          </p>
        </section>

        <section>
          <h5>Watch Video</h5>
          <div className="video">
            <h5>NO VIDEO</h5>
            <iframe
              src={recipeVideoUrl}
              title="wewe"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
      );
    </div>
  );
};

export default Meal;
