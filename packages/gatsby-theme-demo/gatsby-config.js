module.exports = {
  plugins: [
    "@smerth/gatsby-theme-mdx",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
  ],
};
