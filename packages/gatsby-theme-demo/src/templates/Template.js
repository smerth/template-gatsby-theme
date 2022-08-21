import React from "react";
import Layout from "../components/Layout";

function Template({ pageContext: { data } }) {
  return (
    <Layout>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </Layout>
  );
}

export default Template;
