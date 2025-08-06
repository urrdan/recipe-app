import { NavLink } from "react-router-dom";
import Logo from "../../public/logo.png";
function Topbar() {
  return (
    <div className="bg-teal-700 flex justify-between items-center px-5 py-1 h-17 ">
      <NavLink to="/">
        <img src={Logo} className="h-14 invert" />
      </NavLink>
      <div className="py-2 self-center text-teal-50 font-third max-lg:text-sm">
        {/* <a>Favorites</a>{" "} */}
        <NavLink to={`/favorites`} className="hover:opacity-70 mr-3">
          FAVORITES
        </NavLink>
        <NavLink to={`/about`} className="hover:opacity-70">
          ABOUT
        </NavLink>
      </div>
    </div>
  );
}

export default Topbar;
