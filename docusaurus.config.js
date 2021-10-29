/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "ORDA - Object Relational Data Access",
  tagline: "An object-oriented technology for simple and powerful data access",
  url: "https://doc4d.github.io",
  baseUrl: "/orda/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "doc4d", // Usually your GitHub org/user name.
  projectName: "orda", // Usually your repo name.
  noIndex: true,
  themeConfig: {
    prism: {
      theme: require("./src/theme/highlight/themes/palenight"),
    },
    navbar: {
      hideOnScroll: true,
      title: "ORDA",
      logo: {
        alt: "4D Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "Concepts/overview",
          label: "Concepts",
        },
        {
          type: "doc",
          position: "left",
          docId: "API/DataStoreClass",
          label: "API",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "4D Blog",
              to: "https://blog.4d.com",
            },
            {
              label: "4D Forum",
              to: "https://discuss.4d.com",
            },
            {
              label: "Facebook",
              to: "https://www.facebook.com/4Dsoftware/",
            },
            {
              label: "Twitter",
              to: "https://twitter.com/4Dsoftware",
            },
            {
              label: "Youtube",
              to: "https://www.youtube.com/user/4Dsoftware",
            },
            {
              label: "Github",
              to: "https://github.com/4D/",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "4D Documentation",
              to: "https://developer.4d.com/docs/",
            },
            {
              label: "4D Doc Center (Legacy)",
              to: "https://doc.4d.com/",
            },
            {
              label: "Knowledge Base",
              to: "http://kb.4d.com/",
            },
            {
              label: "Downloads",
              to: "https://us.4d.com/product-download",
            },
            {
              label: "Resources",
              to: "https://us.4d.com/resources",
            },
            {
              label: "Get Support",
              to: "https://us.4d.com/4d-technical-support",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About 4D",
              to: "https://us.4d.com/about-us",
            },
            {
              label: "Contact us",
              to: "https://us.4d.com/contact-us",
            },
            {
              label: "4D around the world",
              to: "https://us.4d.com/4d-around-the-world",
            },
            {
              label: "Careers",
              to: "https://us.4d.com/careers",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 4D SAS - All rights reserved`,
    },
  },
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      // Options here
    }]
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/4d/orda/edit/main",
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
};
