/**
 * @type {import('gatsby').GatsbyConfig}*/
module.exports = {
  siteMetadata: {
    title: `LioDev`,
    description: `Portfolio Front-End Lionel Gareca`,
    image: `../images/favicon.png`,
    siteUrl: `https://liodev.netlify.app/`
  },
  plugins: [
  "gatsby-plugin-styled-components",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/favicon.png',
    },
  },

]
};