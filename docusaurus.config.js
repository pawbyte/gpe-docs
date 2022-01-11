// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Game Pencil Engine Documentation',
  tagline: '',
  url: 'https://docs2.gamepencil.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pawbyte', // Usually your GitHub org/user name.
  projectName: 'gpe-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/pawbyte/gpe-docs/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Game Pencil Engine Docs',
        logo: {
          alt: 'Game Pencil Engine Logo',
          src: 'img/gpe-icon.png',
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Getting Started',
          },
          {to: '/tutorials', label: 'Tutorials', position: 'left'},
          {
            href: 'https://github.com/pawbyte/gpe-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorials',
                to: '/tutorials',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/pawbyte',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/dCrCwrQutP',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/pawbyte',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://pawbyte.com/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pawbyte/gpe-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pawbyte LLC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'tutorials',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'tutorials',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './tutorials',
      },
    ],
  ],
};

module.exports = config;
