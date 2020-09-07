"use strict";

module.exports = {
  siteMetadata: {
    title: "Empuls3",
    description: "Empuls3 is a Dallas based Web and App Development Digital Agency. Our goal is to create pain-free marketing solutions that will help to grow your business.",
    author: "@empuls3"
  },
  plugins: ["gatsby-plugin-react-helmet", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "".concat(__dirname, "/src/images")
    }
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "posts",
      path: "".concat(__dirname, "/src/posts")
    }
  }, {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /images/
      }
    }
  }, "gatsby-transformer-sharp", "gatsby-plugin-sharp", {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "gatsby-starter-default",
      short_name: "starter",
      start_url: "/",
      background_color: "#663399",
      theme_color: "#663399",
      display: "minimal-ui",
      icon: "src/images/empuls3-icon.png" // This path is relative to the root of the site.

    }
  } // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
  ]
};