//import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route, HashRouter } from "react-router-dom";
import About from "./pages/about/About";
import Topbar from "./pages/Topbar";
import CategoryMeals from "./pages/CategoryMeals";
import MealRecipe from "./pages/MealRecipe";

function App() {
  return (
    <>
      <div className="bg-teal-50 h-full overflow-auto flex flex-col">
        <HashRouter>
          <Topbar />
          <div className="max-w-210 w-full text-center m-auto my-0 grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryId" element={<CategoryMeals />} />
              <Route path="/meal/:mealId" element={<MealRecipe />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <footer className="bg-teal-800 p-4  text-center">
            <p className="text-white">Mohamed Abdulle &copy;2019</p>
          </footer>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
