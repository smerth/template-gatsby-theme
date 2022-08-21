import React from "react";
import Menu from "../components/Menu";

import "../styles/sitewide.css";

function Layout({ children }) {
  return (
    <div>
      <hr />
      <Menu />
      <hr />
      {children}
    </div>
  );
}

export default Layout;
