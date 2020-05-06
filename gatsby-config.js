module.exports = {
  siteMetadata: {
    title: 'gatsby-start-dimension-v2',
    author: 'Phil Hawker',
    description: 'Gatsby based portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-start-dimension-v2',
        short_name: 'phil',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
