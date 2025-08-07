import { useEffect, useState } from "react";
import type { categoryMeal } from "../apis/types";
import { getCategoriesMeals } from "../apis/endpoints";
import { NavLink, useParams } from "react-router-dom";
import Loader from "../utils/Loader";

const CategoryMeals = () => {
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<categoryMeal[]>([]);

  const getData = async () => {
    const _data = await getCategoriesMeals(categoryId);
    setData(_data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2>{categoryId}</h2>
          <div className="grid gap-4  sm:grid-cols-3 grid-cols-[repeat(auto-fit,minmax(150px,_1fr))]">
            {data.map((item) => (
              <NavLink to={`/meal/${item.idMeal}`}>
                <div className="category-meals-card" key={item.idMeal}>
                  <img
                    src={item.strMealThumb}
                    alt="wrong"
                    className="w-[70%] rounded-sm m-auto shadow-[0_0_10px_2px_var(--color-dark-gray)]"
                  ></img>
                  <p className=" my-2 text-2xl">{item.strMeal}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CategoryMeals;
