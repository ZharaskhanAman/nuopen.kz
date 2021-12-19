module.exports = {
  siteMetadata: {
    title: `KBTU Open - Fall 2021`,
    siteUrl: "https://kbtuopen.acm.kz",
    description: `Regular ICPC-style programming contest organized by Kazakh-British Technical University.`,
    keywords: "icpc, kbtu, kazakh british technical university, kbtu open, acm icpc, kbtuopen",
    email: `t.me/kbtuopen`,
    formLink: "http://ejudge.acm.kz/cgi-bin/new-client?contest_id=3",
    author: `@ZharaskhanAman`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-SRMN1G4E57",
      },
    },
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-smoothscroll`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KBTU Open - Fall 2021`,
        short_name: `kbtuopen`,
        start_url: `/`,
        background_color: `#333644`,
        theme_color: `#333644`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
