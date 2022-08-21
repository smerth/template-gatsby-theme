import { Link } from "gatsby";
import React from "react";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pages/one/">Page One</Link>
        </li>
        <li>
          <Link to="/pages/two/">Page Two</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
