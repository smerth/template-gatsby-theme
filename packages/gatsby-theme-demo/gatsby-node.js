exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const homepage = require.resolve(
    `${__dirname}/src/templates/Homepage.js`,
  );

  // Create a single page.
  createPage({
    path: `/`, // Path for this page — required
    component: homepage,
    context: {
      // Add optional context data to be inserted
      // as props into the page component..
    },
  });
};
