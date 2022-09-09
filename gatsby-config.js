module.exports = {
  siteMetadata: {
    title: `andy-portfolio`,
    siteUrl: `https://andy-marineau.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\: 100, 200,400,600,800`,
          `poppins\:100,200,300`,
          `sans-serif\:300,400,400i,700, 800` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Andy Marineau',
        short_name: 'Andy',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/andy-favicon.png'
      }
    }
  ]
}
