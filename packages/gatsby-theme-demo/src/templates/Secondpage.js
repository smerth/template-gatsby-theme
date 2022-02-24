import React from "react";
import { Link } from "gatsby";

function StyledLink() {
  return;
}

function Secondpage({ pageContext: { pageSlug } }) {
  const path = `/${pageSlug}/`;
  return (
    <div>
      <h4>
        <Link to="/">Homepage</Link> | <Link to={path}>Second Page</Link>
      </h4>
      <h1>Second Page</h1>
    </div>
  );
}

export default Secondpage;
