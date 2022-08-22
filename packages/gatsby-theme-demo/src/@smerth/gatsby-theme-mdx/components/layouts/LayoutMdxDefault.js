import React from "react";
import Layout from "../../../../components/Layout";

function LayoutMdxDefault(props) {
  const { children } = props;

  return (
    <Layout>
      <div>{children}</div>
    </Layout>
  );
}

export default LayoutMdxDefault;
