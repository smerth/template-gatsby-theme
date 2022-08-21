exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const template = require.resolve(`${__dirname}/src/templates/Template.js`);

  const data = [
    {
      path: "/pages/one/",
      title: "Page One",
      body: "Deserunt dolore veniam est proident nulla et elit veniam veniam dolore anim consequat est. Consectetur et dolor laborum deserunt pariatur ex irure elit in elit enim eiusmod dolor dolor. Exercitation culpa laborum nulla do quis quis proident anim nulla sunt Lorem.",
    },
    {
      path: "/pages/two/",
      title: "Page Two",
      body: "Ad in ad aute incididunt fugiat est mollit do officia aliquip pariatur cillum dolore ut. Proident dolor magna duis deserunt voluptate cupidatat voluptate ut labore. Esse eiusmod qui cupidatat non reprehenderit consequat aliqua. Id eu ea magna duis aliquip ullamco velit excepteur. Cillum ex aliquip labore nulla ut magna incididunt cupidatat aliqua. Pariatur amet quis eiusmod Lorem in mollit do nulla aliquip voluptate commodo magna.",
    },
  ];

  data.map((item) => {
    createPage({
      path: item.path, // Path for this page — required
      component: template,
      context: {
        data: { title: item.title, body: item.body },
        // Add optional context data to be inserted
        // as props into the page component..
      },
    });
  });
};
