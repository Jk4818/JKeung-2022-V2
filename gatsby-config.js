module.exports = {
  siteMetadata: {
    siteUrl: "https://jkeung2022v2main.gatsbyjs.io/",
    title: "Jason Keung",
    description: "Jason Keung | Professional Portfolio",
    author: "Jason Keung",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-smoothscroll",
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {},
        allPageHeaders: [],
        mergeSecurityHeaders: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "23",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
  ],
};
