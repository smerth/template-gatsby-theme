exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const homepage = require.resolve(`${__dirname}/src/templates/Homepage.js`);
  const pageSlug = "second-page";
  const secondpage = require.resolve(
    `${__dirname}/src/templates/Secondpage.js`,
  );

  // Create a single page.
  createPage({
    path: `/`, // Path for this page — required
    component: homepage,
    context: {
      pageSlug,
      // Add optional context data to be inserted
      // as props into the page component..
    },
  });
  // Create a single page.
  createPage({
    path: pageSlug, // Path for this page — required
    component: secondpage,
    context: {
      pageSlug,
      // Add optional context data to be inserted
      // as props into the page component..
    },
  });
};
