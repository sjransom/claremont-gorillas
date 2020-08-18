module.exports = {
  siteMetadata: {
    title: `Claremont Gorillas`,
    description: `Claremont Gorillas are a football team who play in the Wimbledon & District League`,
    author: `@sjransom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
