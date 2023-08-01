

import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      {/* <NavLink exact to="/">
        Home
      </NavLink> */}
      <NavLink to="/soda">
        Soda
      </NavLink>
      <NavLink to="/chips">
        Chips
      </NavLink>
      <NavLink to="/freshsardines">
        Fresh Sardines
      </NavLink>

    </div>
  );
}

export default NavBar;
