module.exports = {
  siteMetadata: {
    title: `London Gorillas`,
    description: `London Gorillas are a football team who play in the Wimbledon & District League`,
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
    `gatsby-plugin-sass`,
  ],
}
