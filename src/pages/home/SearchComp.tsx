import { useEffect, useState } from "react";
import { searchMeal } from "../../apis/endpoints";
import type { categoryMeal } from "../../apis/types";
import { NavLink } from "react-router-dom";
import useDelayInput from "./useDelayInput";

const SearchComp = () => {
  const [searchResult, setSearchResultData] = useState<categoryMeal[]>([]);
  const [inputValue, setInputValue] = useState("");

  let delayedInputValue = useDelayInput(inputValue);
  const onChange = async (value: string) => {
    setInputValue(value);
  };

  const onBlur = () => {
    setInputValue("");
    setTimeout(() => {
      setSearchResultData([]);
    }, 300);
  };

  const searchAction = async () => {
    if (delayedInputValue) {
      const _data = await searchMeal(delayedInputValue);
      setSearchResultData(_data);
    } else {
      setSearchResultData([]);
    }
  };

  useEffect(() => {
    searchAction();
  }, [delayedInputValue]);
  return (
    <div className="search-box">
      <div className="relative w-[90%] max-w-[350px] m-auto">
        <input
          placeholder="Search Meal"
          className="font-third bg-light-gray w-full px-2 py-1 rounded text-[14px] "
          onChange={(e) => onChange(e.target.value)}
          value={inputValue}
          onBlur={onBlur}
        />

        {searchResult.length ? (
          <ul className="search-result">
            {searchResult.map((item) => (
              <li key={item.idMeal} className="py-1.5 hover:opacity-50">
                <NavLink to={`/meal/${item.idMeal}`}>{item.strMeal}</NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SearchComp;
