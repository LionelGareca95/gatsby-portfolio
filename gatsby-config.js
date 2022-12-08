/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  "gatsby-plugin-netlify-cms", 
  "gatsby-plugin-styled-components",
  `gatsby-plugin-sass`,
  {
    resolve: 'gatsby-plugin-favicons',
    options: {
      logo: './src/images/favicon.png',
      appName: 'LioDev',
      background: '#D14627',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        yandex: false,
        windows: false
      }
    }
  }
]
};