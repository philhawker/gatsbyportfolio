module.exports = {
  siteMetadata: {
    title: 'Phil Hawker Portfolio',
    author: 'Phil Hawker',
    description: 'Gatsby based portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Phil Hawker Portfolio',
        short_name: 'phil',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logos/ph.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
